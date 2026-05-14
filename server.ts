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

  const inquiries: any[] = [];

  // API Routes
  app.get("/api/health", (req, res) => {
    console.log("Health check pulse...");
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  app.get("/api/admin/enquiries", (req, res) => {
    console.log(`Admin requested enquiries list. Count: ${inquiries.length}`);
    res.json({ inquiries });
  });

  app.get("/api/wellness-tip", async (req, res) => {
    console.log("Generating wellness tip...");
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
    console.log("Received POST to /api/book:", req.body);
    const { name, email, service, message, type = 'Booking' } = req.body;
    
    if (!name || !email) {
      console.warn("Invalid submission: missing name or email");
      return res.status(400).json({ success: false, message: "Name and email are required." });
    }
    
    const newInquiry = {
      id: Date.now(),
      name,
      email,
      service: service || 'General Inquiry',
      message: message || '',
      type,
      timestamp: new Date().toISOString()
    };
    inquiries.unshift(newInquiry);

    console.log(`[Success] Inquiry Saved:`, newInquiry);
    console.log(`[Email] Intended recipient: devarogyamyoga@gmail.com`);
    
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
