const getNavBar = require("./getNavBar");

const loginForm = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Iniciar Sesión</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>

      <body>

        <header>
          ${getNavBar(false)}
        </header>

        <main class="login-container">
          <h2>Iniciar Sesión</h2>

          <form action="/login" method="POST" class="form-container">

            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="ejemplo@email.com"
                required
              >
            </div>

            <div class="form-group">
              <label for="password">Contraseña</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Introduce tu contraseña"
                required
              >
            </div>

            <button type="submit" class="form-btn btn-primary">
              Iniciar Sesión
            </button>

          </form>

          <p style="text-align:center; margin-top:10px;">
            <a  class="links" href="/">Inicio</a>
          </p>

          <p style="text-align:center;">
            ¿No tienes cuenta? <a class="links" href="/crearusuario">Crear Usuario</a>
          </p>

        </main>

      </body>
    </html>
  `;
  return html;
};

module.exports = loginForm;
