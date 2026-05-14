import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Middleware for parsing JSON
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  app.get("/api/wellness-tip", async (req, res) => {
    try {
      const response = await ai.models.generateContent({ 
        model: "gemini-3-flash-preview", 
        contents: "Give me one short, inspiring daily wellness or yoga tip (under 30 words).",
        config: {
          systemInstruction: "You are a calming wellness coach. Providing a daily positive affirmation or practical wellness tip."
        }
      });
      res.json({ tip: response.text || "Focus on your breath and let go of what no longer serves you." });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.json({ tip: "Focus on your breath and let go of what no longer serves you." });
    }
  });

  // Example Booking/Contact API
  app.post("/api/book", (req, res) => {
    const { name, email, service, message, type = 'Booking' } = req.body;
    
    console.log(`[Notification] New ${type} Request:`, { name, email, service, message });
    console.log(`[Notification] Forwarding details to: devarogyamyoga@gmail.com`);
    
    // In a real app, you would integrate an email service here.
    
    res.json({ 
      success: true, 
      message: "Thank you! Your wellness request has been received. Acharya Gaurav will contact you soon." 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
