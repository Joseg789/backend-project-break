const getProductCards = require("./productCards");

const dashboard = (products) => {
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

        <title>Productos</title>
      </head>
      <body>
        <h1>Productos</h1>
        ${getProductCards(products)}
      </body>
    </html>
  `;
  return html;
};

module.exports = dashboard;
