const crearUsuario = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="es">
      <head>
       <meta charset="UTF-8">

        <title>Productos</title>
      </head>
      <body>
        <h1>Crear Usuario</h1>

        <form action="/crearusuario" method="POST">
          <label for="email">email</label>
          <input type="email" id="email" name="email" required>
          <label for="password">Contraseña</label>
          <input type="text" id="password" name="password" required>
          <button type="submit">Guardar</button>
        </form>

        <p><a href="/#">Inicio</a></p>
        <p><a href="/login">Ya tienes Cuenta? </a></p>
      </body>
    </html>
  `;
  return html;
};

module.exports = crearUsuario;
