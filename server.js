require("dotenv").config({ path: ".env" });
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const auth = require("./routes/auth");
const job = require("./routes/job");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Db connected"))
  .catch((err) => console.log(err, "Db failed to connect"));

app.use("/api/v1/auth", auth);
app.use("/api/v1/job", job);

app.use("/*", (req, res) => {
  res.status(404).json({ errorMessage: "Route not found" });
});

app.use(errorHandler);

const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  console.log("Client had made a api request");
  res.json({
    service: "Job Listing Backend API server",
    active: true,
    time: new Date(),
  });
});

app.listen(PORT, () => {
  console.log(`Backened server running at http://${HOST}:${PORT}`);
});
