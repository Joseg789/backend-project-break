const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");

//ruta principal
productRouter.get("/", (req, res) => {
  res.send("Product router funciona");
});

productRouter.get("/dashboard", productController.getProductsDashboard);

//- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.

productRouter.get("/dashboard/new", productController.getNewProductDashboard);

//- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.

productRouter.get(
  "/dashboard/:productId/edit",
  productController.editProductDashboard,
);

// - DELETE /dashboard/:productId/delete: Elimina un producto.

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
