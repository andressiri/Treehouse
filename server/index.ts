import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "config/env/.env") });

const app = express();

app.get("/", (req, res) => {
  res.send("If you see this, server is running...");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  if (process.env.NODE_ENV === "develop")
    console.log(`Server started at port ${PORT}`); // eslint-disable-line no-console
});
