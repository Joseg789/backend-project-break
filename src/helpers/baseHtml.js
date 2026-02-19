const getProductCards = require("./productCards");
const getNavBar = require("../helpers/getNavBar");

//muestra los productos a los usuarios y todo el mundo
const baseHtml = (products, view = "") => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/styles.css" />
        <title>Tienda de Productos</title>
      </head>

      <body>

        <header>
          ${getNavBar(false)}
        </header>

        <main class="container">
          <h1 class="page-title">
            ${
              view !== "home"
                ? (products[0]?.categoria ?? "Productos")
                : "Todos los productos"
            }
          </h1>

          <div class="container-products">
            ${getProductCards(products, false)}
          </div>
        </main>

      </body>
    </html>
  `;

  return html;
};
module.exports = baseHtml;
