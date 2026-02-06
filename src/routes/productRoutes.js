// Vamos a crear las rutas CRUD para los productos.
// Las rutas deberían tener una estructura similar a esta:

// - GET /products: Devuelve todos los productos. Cada producto tendrá un enlace a su página de detalle.
// - GET /products/:productId: Devuelve el detalle de un producto.
// - GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.
// - GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.
// - POST /dashboard: Crea un nuevo producto.
// - GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
// - GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.
// - PUT /dashboard/:productId: Actualiza un producto.
// - DELETE /dashboard/:productId/delete: Elimina un producto.

const express = require("express");
const productRouter = express.Router();
const Product = require("../models/Product");

//ruta principal
productRouter.get("/", (req, res) => {
  res.send("Product router funciona");
});

// - GET /products:

productRouter.get("/products", async (req, res) => {
  try {
    // .select("-_id");
    const products = await Product.find();
    if (!products) {
      return res.status(404).json({ error: "Products Not Found" });
    }
    res.json(products);
  } catch (error) {
    console.error(error.messsage);
    return res.status(500).json(error);
  }
});

//create Products - POST /dashboard:

productRouter.post("/dashboard", async (req, res) => {
  const { nombre, descripcion, imagen, categoria, talla, precio } = req.body;
  try {
    const newProduct = await Product.create({
      nombre,
      descripcion,
      imagen,
      categoria,
      talla,
      precio,
    });
    console.log(newProduct);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.error(error.messsage);
    return res.status(500).json(error);
  }
});

module.exports = productRouter;
