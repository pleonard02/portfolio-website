require("dotenv").config();

const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    message: "Kali's API is running!",
    status: "ok",
  });
});


app.post("/api/chat", async (req, res) => {
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

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      instructions: `
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
      input: message.trim(),
      max_output_tokens: 250,
      store: false,
    });

    res.status(200).json({
      reply: response.output_text,
    });
  } catch (error) {
    console.error("Kali API error:", error.message);

    res.status(502).json({
      message: "Kali couldn't respond right now.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Kali's backend is running on port ${PORT}`);
});
