const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Products API",
      version: "1.0.0",
      description: "API de productos",
    },
    servers: [{ url: "http://localhost:4000/api" }],

    components: {
      schemas: {
        Product: {
          type: "object",
          required: ["nombre", "precio"],
          properties: {
            _id: { type: "string" },
            nombre: { type: "string" },
            descripcion: { type: "string" },
            categoria: { type: "string" },
            talla: { type: "string" },
            precio: { type: "number" },
            imagen: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./src/api/*.js"],
};

module.exports = swaggerJSDoc(options);
