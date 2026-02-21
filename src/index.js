const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); //!para que lea las variables de entorno

const helmet = require("helmet");
const methodOverride = require("method-override");
const app = express();
const productRouter = require("./routes/productRoutes");
const productApiRouter = require("./api/api.router");
const session = require("express-session");
const errorHandler = require("./middlewares/errorHandler");

const { dbConnection } = require("./config/db");
const showAlert = require("./helpers/showAlertError");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

app.use(
  helmet({
    contentSecurityPolicy: false, //para hacer el put con el form
  }),
);
app.use(methodOverride("_method")); // leerá ?_method=PUT/DELETE
dbConnection();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(
  session({
    //para guardar los datos en sesion
    secret: "mi_secret",
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(express.static("public"));
app.use("/", productRouter);
app.use("/api", productApiRouter); //api
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); //documentacion con swagger

//rutas no existenntes
app.use((req, res) => {
  res.status(404).send(showAlert(["Pagina no encontrada"]));
});
//middleware para errores

app.use(errorHandler);
app.listen(process.env.PORT || 4000, () => {
  console.log(`server listen in http://localhost:${process.env.PORT || 4000}`);
});

module.exports = app;
