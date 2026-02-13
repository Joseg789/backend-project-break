const getProductCards = require("./productCards");
const getNavBar = require("../helpers/getNavBar");

const baseHtml = (products, categorias) => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
       <meta charset="UTF-8">
        <title>Tienda De Productos</title>
      </head>
      <body>
      <header>
      ${getNavBar(false)}
      </header>
        <h1>Productos</h1>
        ${getProductCards(products)}
      </body>
    </html>
  `;
  return html;
};

module.exports = baseHtml;
