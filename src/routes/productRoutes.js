const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const baseHtml = require("../helpers/baseHtml");
const Product = require("../models/Product");
const authController = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadCloudinaryMiddleware");

//ruta principal products
productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  const categorias = await Product.distinct("categoria");
  res.send(baseHtml(products, categorias));
});

productRouter.get("/dashboard", auth, productController.getProductsDashboard);

productRouter.get(
  "/dashboard/new",
  auth,
  productController.getNewProductDashboard,
);

productRouter.get(
  "/dashboard/:productId/edit",
  auth,
  productController.editProductDashboard,
);
//login
productRouter.get("/login", authController.getLoginForm);
productRouter.post("/login", authController.login);

//crear usuario

productRouter.get("/crearusuario", authController.getCreateUserForm);

productRouter.post("/crearusuario", authController.createUser);

productRouter.get(
  "/dashboard/:productId/delete",
  auth,
  productController.getFormDeleteProduct,
);

// - GET /products:

productRouter.get("/products", productController.getAllProducts);

//create Products - POST /dashboard:

productRouter.post(
  "/dashboard",
  auth,
  upload.single("image"),
  productController.createProductDashboard,
);

// - GET /products/:productId: Devuelve el detalle de un producto.

productRouter.get("/products/:id", productController.getProductById);

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
productRouter.get("/dashboard/:id", auth, productController.getProductDetail);

//- PUT /dashboard/:productId: Actualiza un producto.
productRouter.put(
  "/dashboard/:productId",
  auth,
  upload.single("image"),

  productController.updateProductDashboard,
);
//elimina un producto
productRouter.delete(
  "/dashboard/delete/:productId",
  auth,
  productController.deleteProductDashboard,
);

//mostar productos por categorias
productRouter.get("/:categoria", productController.getProductsByCategories);

module.exports = productRouter;
