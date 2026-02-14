const productDetail = require("./productDetails");

const deleteProduct = (product) => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
       <meta charset="UTF-8">
        <meta http-equiv="Content-Security-Policy"
        content="default-src 'self';
        connect-src 'self' http://localhost:4000;
        img-src 'self' data: http:;
        style-src 'self' 'unsafe-inline';
        form-action 'self';">
        <title>Editar Productos</title>
      </head>
      <body>
        ${productDetail(product, true)}
       
        <form action="/dashboard/delete/${product._id}?_method=DELETE" method="POST">

          <button type="submit">ELIMINAR</button>
        </form>

        <p><a href="/dashboard">← Volver al dashboard</a></p>
      </body>
    </html>
  `;
  return html;
};

module.exports = deleteProduct;
