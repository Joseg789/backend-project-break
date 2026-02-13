const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const baseHtml = require("../helpers/baseHtml");
const Product = require("../models/Product");

//ruta principal products
productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  const categorias = await Product.distinct("categoria");
  res.send(baseHtml(products, categorias));
});

productRouter.get("/dashboard", productController.getProductsDashboard);

productRouter.get("/dashboard/new", productController.getNewProductDashboard);

productRouter.get(
  "/dashboard/:productId/edit",
  productController.editProductDashboard,
);

//mostar productos por categorias
productRouter.get("/:categoria", productController.getProductsByCategories);

productRouter.get(
  "/dashboard/:productId/delete",
  productController.getFormDeleteProduct,
);

// - GET /products:

productRouter.get("/products", productController.getAllProducts);

//create Products - POST /dashboard:

productRouter.post("/dashboard", productController.createProductDashboard);

// - GET /products/:productId: Devuelve el detalle de un producto.

productRouter.get("/products/:id", productController.getProductById);

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
productRouter.get("/dashboard/:id", productController.getProductDetail);

//- PUT /dashboard/:productId: Actualiza un producto.
productRouter.put(
  "/dashboard/:productId",
  productController.updateProductDashboard,
);
//elimina un producto
productRouter.delete(
  "/dashboard/delete/:productId",
  productController.deleteProductDashboard,
);

module.exports = productRouter;
