const Product = require("../models/Product");
const dashboard = require("../helpers/dashboard");
const newProductTemplate = require("../helpers/newProduct");
const editProduct = require("../helpers/editProduct");
const deleteProduct = require("../helpers/deleteProduct");
const baseHtml = require("../helpers/baseHtml");
const validateErrors = require("../utils/validateErrors");
const showAlert = require("../helpers/showAlertError");

const productController = {
  getProductsDashboard: async (req, res) => {
    const products = await Product.find();
    if (!products || products.length === 0) {
      return res.send(
        showAlert(["No Hay Productos Disponibles o Debe Agregar Productos"]),
      );
    }
    const dashboardHtml = dashboard(products);
    return res.send(dashboardHtml);
  },

  getNewProductDashboard: (req, res) => {
    res.send(newProductTemplate);
  },

  editProductDashboard: async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findById(productId);
      const html = editProduct(product);
      res.send(html);
    } catch (error) {
      return res.status(500).send(showAlert([error.message]));
    }
  },
  getFormDeleteProduct: async (req, res) => {
    try {
      const { productId } = req.params;
      const product = await Product.findById(productId);
      const html = deleteProduct(product);
      res.send(html);
    } catch (error) {
      return res.status(500).send(showAlert([error.message]));
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      if (products.length === 0) {
        return res.send(
          showAlert(["No Hay Productos Disponibles o Debe Agregar Productos"]),
        );
      }
      res.json(products);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send(showAlert([error.message]));
    }
  },

  createProductDashboard: async (req, res) => {
    const { nombre, descripcion, categoria, talla, precio } = req.body;

    const errors = validateErrors(req);
    if (errors.length > 0) {
      const html = showAlert(errors);
      return res.send(html);
    }

    try {
      const newProduct = await Product.create({
        nombre: nombre.toUpperCase(),
        descripcion: descripcion.toUpperCase(),
        imagen: req.file ? req.file.path : undefined,
        categoria, //esta Capitalizada
        talla: talla.toUpperCase(),
        precio,
      });

      return res.redirect("/dashboard");
    } catch (err) {
      if (err.name === "ValidationError") {
        // Convertir a arreglo de mensajes
        const erroresArray = Object.values(err.errors).map((e) => e.message);

        // Por ejemplo:
        // ['Path `nombre` is required.', 'Path `precio` is required.']
        return res.send(showAlert(erroresArray));
      } else {
        // Otros errores
        return res.status(500).send(showAlert([err.message]));
      }
    }
  },

  getProductById: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.json(product);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send(showAlert([error.message]));
    }
  },
  getProductDetail: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      console.error(error.message);
      return res.status(500).send(showAlert([error.message]));
    }
  },
  updateProductDashboard: async (req, res) => {
    const { productId } = req.params;
    const { nombre, descripcion, categoria, talla, precio } = req.body;

    try {
      const newProduct = await Product.findByIdAndUpdate(
        productId,
        {
          nombre: nombre.toUpperCase(),
          descripcion: descripcion.toUpperCase(),
          imagen: req.file ? req.file.path : undefined,
          categoria, //esta Capitalizada
          talla: talla.toUpperCase(),
          precio,
        },
        {
          returnDocument: "after", //para que traiga el documento actualizado
        },
      );
      if (!newProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      return res.redirect("/dashboard");
    } catch (error) {
      return res.status(500).send(showAlert([error.message]));
    }
  },
  getProductsByCategories: async (req, res) => {
    let { categoria } = req.params;
    categoria = categoria[0].toUpperCase() + categoria.slice(1); //capitalize
    const productsByCategory = await Product.find({ categoria });
    const dashboardHtml = baseHtml(productsByCategory);
    return res.send(dashboardHtml);
  },

  deleteProductDashboard: async (req, res) => {
    const { productId } = req.params;
    try {
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.redirect("/dashboard");
    } catch (error) {
      console.error(error.message);
      return res.status(500).send(showAlert([error.message]));
    }
  },
};

module.exports = productController;
