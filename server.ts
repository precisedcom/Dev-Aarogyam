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

  // Comprehensive Request Logger
  app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    if (req.url.startsWith('/api')) {
      console.log(`    Headers: ${JSON.stringify(req.headers)}`);
      if (req.method === 'POST') console.log(`    Body: ${JSON.stringify(req.body)}`);
    }
    next();
  });

  const inquiries: any[] = [];

  // Define API Router to isolate routes
  const apiRouter = express.Router();

  apiRouter.get("/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  apiRouter.get("/admin/enquiries", (req, res) => {
    res.json({ inquiries });
  });

  apiRouter.post("/test-post", (req, res) => {
    res.json({ success: true, message: "POST works" });
  });

  apiRouter.get("/wellness-tip", async (req, res) => {
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
      console.error("Gemini Error:", error);
      res.json({ tip: "Focus on your breath and let go of what no longer serves you." });
    }
  });

  apiRouter.post("/book", (req, res) => {
    try {
      const { name, email, service, message, type = 'Booking' } = req.body;
      
      if (!name || !email) {
        return res.status(400).json({ 
          success: false, 
          message: "Name and email are strictly required." 
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
      console.log(`[Success] Inquiry Registered: ${newInquiry.id}`);
      
      res.status(200).json({ 
        success: true, 
        message: "Details recorded. Acharya Gaurav will reach out shortly." 
      });
    } catch (err: any) {
      console.error("API Error /book:", err);
      res.status(500).json({ success: false, message: err.message });
    }
  });

  // Mount API Router
  app.use("/api", apiRouter);

  // Catch-all for unknown /api/* routes
  app.all("/api/*", (req, res) => {
    console.warn(`[404] API Not Found: ${req.method} ${req.url}`);
    res.status(404).json({ 
      success: false, 
      message: `API Route not found: ${req.method} ${req.url}` 
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
