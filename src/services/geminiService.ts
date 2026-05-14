import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getWellnessTip() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Give me one short, inspiring daily wellness or yoga tip (under 30 words).",
      config: {
        systemInstruction: "You are a calming wellness coach. Providing a daily positive affirmation or practical wellness tip.",
      },
    });
    return response.text || "Breathe deeply. Find peace in the present moment.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Focus on your breath and let go of what no longer serves you.";
  }
}

export async function getWellnessAdvice(userPrompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: "You are a professional yoga and wellness assistant. Provide helpful, safe, and encouraging advice about yoga poses, meditation techniques, and general wellness. If asked for medical advice, advise seeking a professional.",
      },
    });
    return response.text || "I'm here to support your journey. How else can I help?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting right now, but remember to prioritize your wellbeing.";
  }
}
