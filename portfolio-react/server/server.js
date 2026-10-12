require("dotenv").config();

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

app.listen(PORT, () => {
  console.log(`Kali's backend is running on port ${PORT}`);
});
