import express from "express";
import cors from "cors";
import feedbackRouter from "./routes/feedbackRoute.js";

const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true, // optional, if you're using cookies/auth
}));

app.use(express.json());

app.use("/api/feedback", feedbackRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
