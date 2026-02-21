const productDetail = require("./productDetails");
const getNavBar = require("./getNavBar");

const deleteProduct = (product) => {
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

        <title>Eliminar Producto</title>

        <link rel="stylesheet" href="/css/styles.css" />
      </head>

      <body class="admin">

        <header>
          ${getNavBar(true)}
        </header>

        <main class="container">

          <h1 class="page-title">Confirmar Eliminación</h1>

          <div class="delete-wrapper">

            ${productDetail(product, true, "delete")}
            <form 
              class="form-delete"
              action="/dashboard/delete/${product._id}?_method=DELETE" 
              method="POST"
            >
              <button type="submit" class="form-btn btn-delete">
                Eliminar definitivamente
              </button>

              <a  class="links" href="/dashboard" >
                Cancelar
              </a>
            </form>

          </div>

        </main>

      </body>
    </html>
  `;

  return html;
};

module.exports = deleteProduct;
