const getNavBar = require("./getNavBar");

const newProductTemplate = `
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nuevo Producto</title>
      <link rel="stylesheet" href="/css/styles.css" />
    </head>
    <body class="admin">

      <header>
        ${getNavBar(true)}
      </header>

      <main class="container">
        <h1 class="page-title">Crear Nuevo Producto</h1>

        <form 
          action="/dashboard" 
          method="POST" 
          enctype="multipart/form-data" 
          class="form-container"
        >

          <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" required>
          </div>

          <div class="form-group">
            <label for="precio">Precio (€)</label>
            <input type="number" id="precio" name="precio" min="0" step="0.01" required>
          </div>

          <div class="form-group">
            <label for="categoria">Categoría</label>
            <input type="text" id="categoria" name="categoria" required placeholder="Camisetas, Pantalones, Zapatos, Accesorios">
          </div>

          <div class="form-group">
            <label for="talla">Talla</label>
            <input type="text" id="talla" name="talla" required placeholder="XS, S, M, L, XL">
          </div>

          <div class="form-group">
            <label for="descripcion">Descripción</label>
            <textarea id="descripcion" name="descripcion" rows="3" required></textarea>
          </div>

          <div class="form-group">
            <label for="image">Imagen</label>
            <input type="file" id="image" name="image" required>
          </div>

          <button type="submit" class="form-btn btn-primary">Guardar Producto</button>
          <a href="/dashboard" class="links">Cancelar</a>

        </form>
      </main>

    </body>
  </html>
`;

module.exports = newProductTemplate;
