const getNavBar = (admin) => `
  <nav class="navbar">

    <a class="links" href="/" >MiTienda</a>

    <div class="navbar-links">
      ${
        admin
          ? `<a class="links" href="/dashboard">Productos</a> 
             <a class="links" href="/dashboard/categoria/camisetas">Camisetas</a>
             <a class="links" href="/dashboard/categoria/pantalones">Pantalones</a>
             <a class="links" href="/dashboard/categoria/zapatos">Zapatos</a>
             <a class="links" href="/dashboard/categoria/accesorios">Accesorios</a>
             <a class="links" href="/dashboard/new" class="navbar-btn">Crear Producto</a>
             <a class="links"  href="/dashboard">Admin</a>
           
             `
          : `<a class="links" href="/#">Productos</a>
             <a class="links" href="/camisetas">Camisetas</a>
             <a class="links" href="/pantalones">Pantalones</a>
             <a class="links" href="/zapatos">Zapatos</a>
             <a class="links" href="/accesorios">Accesorios</a>`
      }
      
    </div>

    <div class="navbar-actions">
    ${
      admin
        ? ` <form action="/logout" method="POST">
             <input type="submit" class="links btn-logout" value="Logout"  >
            </form>  `
        : ` <a class="links" href="/login">Login</a>`
    }
      
    </div>

  </nav>
`;

module.exports = getNavBar;
