import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  if (!process.env.GEMINI_API_KEY) {
    console.warn("GEMINI_API_KEY is not set in the environment. AI features will be disabled.");
  }

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY || "",
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });

  // Middleware for parsing JSON
  app.use(express.json());

  // Simple Request Logger
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });

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
    if (!process.env.GEMINI_API_KEY) {
      return res.json({ tip: "Start your day with deep breaths and a smile." });
    }

    try {
      const response = await ai.models.generateContent({ 
        model: "gemini-flash-latest", 
        contents: "Give me one short, inspiring daily wellness or yoga tip (under 30 words).",
        config: {
          systemInstruction: "You are a calming wellness coach. Providing a daily positive affirmation or practical wellness tip."
        }
      });
      res.json({ tip: response.text || "Focus on your breath and let go of what no longer serves you." });
    } catch (error: any) {
      console.error("Gemini Error Details:", JSON.stringify(error, null, 2));
      res.json({ tip: "Focus on your breath and let go of what no longer serves you." });
    }
  });

  // Example Booking/Contact API
  app.post("/api/book", (req, res) => {
    try {
      console.log("Incoming POST to /api/book");
      console.log("Headers:", JSON.stringify(req.headers));
      console.log("Body:", JSON.stringify(req.body));

      const { name, email, service, message, type = 'Booking' } = req.body;
      
      if (!name || !email) {
        console.warn("Rejected: Invalid submission - missing name or email");
        return res.status(400).json({ 
          success: false, 
          message: "Name and email are strictly required for inquiry processing." 
        });
      }
      
      const newInquiry = {
        id: Date.now(),
        name: String(name),
        email: String(email),
        service: String(service || 'General Inquiry'),
        message: String(message || ''),
        type: String(type),
        timestamp: new Date().toISOString()
      };
      
      inquiries.unshift(newInquiry);

      console.log(`[Success] Inquiry Registered:`, JSON.stringify(newInquiry));
      console.log(`[Email Alert] Simulation for: devarogyamyoga@gmail.com`);
      
      return res.status(200).json({ 
        success: true, 
        message: "Success! Your details have been recorded. Acharya Gaurav will reach out shortly." 
      });
    } catch (err: any) {
      console.error("POST /api/book Crashed:", err);
      return res.status(500).json({ 
        success: false, 
        message: `Internal Server Error: ${err.message}` 
      });
    }
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
