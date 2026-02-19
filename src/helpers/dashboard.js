const getProductCards = require("./productCards");
const getNavBar = require("./getNavBar");

const dashboard = (products) => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta http-equiv="Content-Security-Policy"
          content="default-src 'self';
          connect-src 'self' http://localhost:4000;
          img-src 'self' data: http:;
          style-src 'self' 'unsafe-inline';
          form-action 'self';">

        <title>Dashboard - Productos</title>

        <link rel="stylesheet" href="/css/styles.css" />
      </head>

      <body>

        <header>
          ${getNavBar(true)}
        </header>

        <main class="container">

          <h1 class="page-title">Panel de Administración</h1>

          <div class="container-products">
            ${
              products.length
                ? getProductCards(products, true)
                : "<p>No hay productos creados.</p>"
            }
          </div>

        </main>

      </body>
    </html>
  `;

  return html;
};

module.exports = dashboard;
