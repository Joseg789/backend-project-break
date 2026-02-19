const getNavBar = require("./getNavBar");

const showAlert = (errors) => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Error</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>

      <body>
        <header>
          ${getNavBar(false)}
        </header>

        <main class="container">

          <div class="alert-card error">
        <h2>Ha ocurrido un problema al procesar tu solicitud</h2>
        <ul>
        ${errors.map((e) => ` <li>${e}</li>`).join("")}
        </ul>
        <a href="javascript:history.back()" class="btn-delete">Volver</a>
      </div>

        </main>

      </body>
    </html>
  `;

  return html;
};

module.exports = showAlert;
