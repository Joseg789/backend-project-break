const getNavBar = require("./getNavBar");

const editProduct = (product) => {
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

        <title>Editar Producto</title>
        <link rel="stylesheet" href="/css/styles.css" />
      </head>

      <body class="admin">

        <header>
          ${getNavBar(true)}
        </header>

        <main class="container">
          <h1 class="page-title">Editar Producto</h1>

          <form 
            class="form-container"
            action="/dashboard/${product._id}?_method=PUT" 
            method="POST" 
            enctype="multipart/form-data"
          >

            <div class="form-group">
              <label>Nombre</label>
              <input type="text" name="nombre" value="${product.nombre}" required>
            </div>

            <div class="form-group">
              <label>Precio (€)</label>
              <input type="number" name="precio" value="${product.precio}" min="0" step="0.01" required>
            </div>

            <div class="form-group">
              <label>Categoría</label>
              <input type="text" name="categoria" value="${product.categoria}" required>
            </div>

            <div class="form-group">
              <label>Talla</label>
              <input type="text" name="talla" value="${product.talla}" required>
            </div>

            <div class="form-group">
              <label>Descripción</label>
              <textarea name="descripcion" rows="3" required>${product.descripcion}</textarea>
            </div>

            <div class="form-group">
              <label>Imagen actual</label>
              <img class="preview-img" src="${product.imagen}">
            </div>

            <div class="form-group">
              <label>Nueva imagen (opcional)</label>
              <input type="file" name="image">
            </div>

            <button type="submit" class="form-btn btn-edit">
              Guardar cambios
            </button>

            <a class="links" href="/dashboard" >
              Cancelar
            </a>

          </form>
        </main>

      </body>
    </html>
  `;
  return html;
};

module.exports = editProduct;
