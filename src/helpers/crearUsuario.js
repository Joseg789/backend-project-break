const getNavBar = require("./getNavBar");

const crearUsuario = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Crear Usuario</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>

      <body>
      <header>
  ${getNavBar(false)}
</header>

        <div class="login-container">
          <h2>Crear cuenta</h2>

          <form action="/crearusuario" method="POST" class="form-container">

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
              Crear usuario
            </button>

          </form>

          <p style="text-align:center; margin-top:10px;">
            <a href="/">Inicio</a>
          </p>

          <p style="text-align:center;">
            ¿Ya tienes cuenta?
            <a href="/login">Inicia sesión</a>
          </p>
        </div>

      </body>
    </html>
  `;
  return html;
};

module.exports = crearUsuario;
