const productDetail = (product, admin, view = "") => {
  const html = `
    <div class="product-card">

      <img src="${product.imagen}" alt="Imagen de ${product.nombre}">

      <div class="card-body">
        <span class="card-categoria">${product.categoria ?? ""}</span>

        <h2 class="card-nombre">${product.nombre}</h2>

        <p class="card-descripcion">
          ${product.descripcion}
        </p>

        <p class="card-talla">
          Talla: ${product.talla}
        </p>

        <p class="card-precio">
          ${product.precio}€
        </p>

        ${
          admin
            ? `
              <div class="card-admin-actions">
                <a class="btn-edit" href="/dashboard/${product._id}/edit">
                  Editar
                </a>

                ${
                  view !== "delete"
                    ? `<a class="btn-delete" href="/dashboard/${product._id}/delete">
                        Eliminar
                      </a>`
                    : ""
                }
              </div>
            `
            : ""
        }

      </div>
    </div>
  `;

  return html;
};

module.exports = productDetail;
