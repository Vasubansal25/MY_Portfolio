import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve resume for viewing
app.get("/resume/view", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "resume.pdf"));
});

// Serve resume for downloading
app.get("/resume/download", (req, res) => {
  res.download(path.join(__dirname, "public", "resume.pdf"), "My_Resume.pdf");
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
