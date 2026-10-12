const path = require("path");

require("dotenv").config({
  path: path.join(__dirname, ".env"),
});

const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT === undefined ? 3001 : Number(process.env.PORT);

const { rateLimit } = require("express-rate-limit");

if (!Number.isInteger(PORT) || PORT < 0 || PORT > 65535) {
  throw new Error("PORT must be an integer between 0 and 65535.");
}

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  }),
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "Kali's API is running!",
    status: "ok",
  });
});

const charLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message: "Kali needs a little catnap! Please try again in 15 minutes.",
  },
});

app.post("/api/chat", charLimiter, async (req, res) => {
  try {
    const { message } = req.body;

    if (
      typeof message !== "string" ||
      !message.trim() ||
      message.length > 1000
    ) {
      return res.status(400).json({
        message: "Please enter a valid message.",
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: message.trim(),
      config: {
        systemInstruction: `
        You are Kali, a friendly black cat and the AI
        assistant for Priscilla Leonard's portfolio.

        Priscilla is an aspiring software engineer with
        experience in React, JavaScript, Node.js,
        Express, MongoDB, and full-stack development.

        Her featured project is The Recipe Box,
        a MERN application for managing recipes,
        meal plans, kitchen inventory, and shopping lists.

        Be friendly, professional, and concise.
        Answer questions about Priscilla's skills,
        projects, and professional background.
        Never invent qualifications or experience.
        If you don't know something, say so.
        `,
        maxOutputTokens: 1024,
      },
    });

    res.status(200).json({
      reply: response.text,
    });
  } catch (error) {
    console.error("Kali API error:", error.message);

    const isUnavailable = error.status === 503;

    res.status(isUnavailable ? 503 : 502).json({
      message: isUnavailable
        ? "Kali is taking a quick catnap. Please try again shortly!"
        : "Kali couldn't respond right now.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Kali's backend is running on port ${PORT}`);
});
