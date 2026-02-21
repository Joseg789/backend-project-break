const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productController");
const baseHtml = require("../helpers/baseHtml");
const Product = require("../models/Product");
const authController = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadCloudinaryMiddleware");
const showAlert = require("../helpers/showAlertError");

//ruta principal products
productRouter.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(baseHtml(products, "home"));
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
productRouter.get(
  "/categoria/:categoria",
  productController.getProductsByCategories,
);

productRouter.get(
  "/dashboard/categoria/:categoria",
  auth,
  authController.getProductsByCategories,
);

// Ruta de logout
productRouter.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.send(
        showAlert(["No se pudo cerrar la sesión, intenta de nuevo."]),
      );
    }

    res.clearCookie("connect.sid");
    return res.redirect("/");
  });
});

module.exports = productRouter;
