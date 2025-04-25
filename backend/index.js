import express from "express";

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
