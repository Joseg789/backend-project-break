// Vamos a crear las rutas CRUD para los productos.
// Las rutas deberían tener una estructura similar a esta:

//!- GET /dashboard: Devuelve el dashboard del administrador. En el dashboard aparecerán todos los artículos que se hayan subido. Si clickamos en uno de ellos nos llevará a su página para poder actualizarlo o eliminarlo.

//- GET /dashboard/:productId/edit: Devuelve el formulario para editar un producto.

const express = require("express");
const productRouter = express.Router();
const Product = require("../models/Product");
const newProductTemplate = require("../templates/newProduct");

//ruta principal
productRouter.get("/", (req, res) => {
  res.send("Product router funciona");
});

//- GET /dashboard/new: Devuelve el formulario para subir un artículo nuevo.

productRouter.get("/dashboard/new", (req, res) => {
  res.send(newProductTemplate);
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

// - GET /products/:productId: Devuelve el detalle de un producto.

productRouter.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
});

//- GET /dashboard/:productId: Devuelve el detalle de un producto en el dashboard.
productRouter.get("/dashboard/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
});

//- PUT /dashboard/:productId: Actualiza un producto.
productRouter.put("/dashboard/:productId", async (req, res) => {
  const { productId } = req.params;
  const { nombre, descripcion, imagen, categoria, talla, precio } = req.body;

  try {
    const newProduct = await Product.findByIdAndUpdate(
      productId,
      {
        nombre,
        descripcion,
        imagen,
        categoria,
        talla,
        precio,
      },
      {
        new: true, //para que traiga el documento actualizado
      },
    );
    if (!newProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(newProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
});
// - DELETE /dashboard/:productId/delete: Elimina un producto.

productRouter.delete("/dashboard/:productId/delete", async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndDelete(productId);
    console.log(product);
    res.json(product);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json(error);
  }
});

module.exports = productRouter;
