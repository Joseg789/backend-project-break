const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");

dotenv.config();

const app = express();

const productRouter = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");
const { dbConnection } = require("./config/db");

app.use(helmet());

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", productRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 API running → http://localhost:${PORT}`);
});

module.exports = app;
