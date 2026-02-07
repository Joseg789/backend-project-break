const express = require("express");
const dotenv = require("dotenv");
const { dbConnection } = require("./config/db");
dotenv.config(); //!para que lea las variables de entorno
const app = express();
const productRouter = require("./routes/productRoutes");
dbConnection();
app.use(express.json());
app.use(express.urlencoded());
app.use("/", productRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`server listen in http://localhost:${process.env.PORT || 4000}`);
});
