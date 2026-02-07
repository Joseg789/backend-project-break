const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const methodOverride = require("method-override");
const app = express();

const { dbConnection } = require("./config/db");
dotenv.config(); //!para que lea las variables de entorno
const productRouter = require("./routes/productRoutes");
app.use(
  helmet({
    contentSecurityPolicy: false, //para hacer el put con el form
  }),
);
app.use(methodOverride("_method")); // leerá ?_method=PUT/DELETE
dbConnection();
app.use(express.json());
app.use(express.urlencoded());
app.use("/", productRouter);

app.listen(process.env.PORT || 4000, () => {
  console.log(`server listen in http://localhost:${process.env.PORT || 4000}`);
});
