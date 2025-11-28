import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if API key is present
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = `
You are the AI assistant for NovaMaterial, a high-tech material science company.
Our core businesses are:
1. Medical Flexible Packaging: Sterile, reliable, ISO 11607 compliant.
2. Precision Injection Molding: Advanced molding for critical medical parts, cleanroom production.
3. Soy Protein Innovation: Sustainable biomaterials, eco-friendly.

Answer visitor questions professionally, concisely, and emphasize our commitment to quality, innovation, and sustainability.
If the API key is missing or you cannot answer, apologize politely.
Keep answers under 100 words.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "AI Assistant is currently offline (API Key missing). Please contact us via the form.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm having trouble connecting to the server right now.";
  }
};