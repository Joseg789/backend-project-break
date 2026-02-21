# 🛍️ Tienda de Ropa — Full Stack SSR Commerce

Aplicación web de e-commerce desarrollada con Node.js y renderizado del lado del servidor (SSR).  
Incluye catálogo público, página de detalle y dashboard de administración para gestionar productos con persistencia en base de datos MongoDB.

> Proyecto orientado a aprender arquitectura MVC en backend, SSR sin frameworks de frontend y CRUD completo con dashboard.

---

## ✨ Features

- Catálogo público de productos
- Página de detalle de producto
- Dashboard de administración (CRUD)
- Arquitectura MVC
- Persistencia en MongoDB
- Renderizado HTML con Template Literals (SSR)
- Autenticación admin
- Subida de imágenes con Cloudinary
- Testing con Jest + Supertest
- API REST para frontend React

---

## Tech Stack

**Backend**

- Node.js
- Express
- MongoDB
- Mongoose

**Infraestructura / herramientas**

- dotenv
- Method Override
- Helmet
- Cloudinary
- Multer
- Jest
- Supertest
- Swagger

---

## Arquitectura

Arquitectura MVC con SSR:

- **Routes** → definen endpoints
- **Controllers** → lógica de negocio + render HTML
- **Models** → esquema Mongoose para productos y ususarios
- **Helpers** → generación de vistas SSR reutilizables

---

## Estructura del proyecto

.
├── config/
│ └── db.js
├── controllers/
│ ├── productController.js
│ └── authController.js
├── models/
│ └── Product.js
└── User.js
├── routes/
│ ├── productRoutes.js
│ └── authRoutes.js
├── middlewares/
│ └── authMiddleware.js
└── uploadMiddleware.js
└── errorHandler.js
├── helpers/
│ ├── baseHtml.js
│ ├── getNavBar.js
│ └── template.js
└── productCard.js
└── showAlertError.js
└──

├── test/
│ └── productController.test.js
mocks/
└── productMocks.js
app.js/test

├── index.js
├── .env
└── package.json

## Requisitos

- Node.js ≥ 18
- Cuenta en MongoDB Atlas
- Git
- Cuenta en Cloudinary

---

## Variables de entorno

Crear `.env`:

env
MONGO_URI=<mongodb_uri>
PORT=4000
ADMIN_USER=admin
ADMIN_PASSWORD=secret

CLOUDINARY_URL=<cloudinary_url>
CLOUDINARY_CLOUD_NAME=<cloudinary_cloud_name>
CLOUDINARY_API_KEY=<cloudinary_api_key>
CLOUDINARY_API_SECRET=<cloudinary_api_secret>

### Instalación

- 1 Clonar repositorio
  git clone <repo>
  cd <repo>
- 2 Instalar dependencias
  npm install
- 3 Configurar entorno

Crear .env

- Añadir variables de entorno

- Ejecutar proyecto
  npm start

### Uso

- Listado productos /products
- Detalle producto /products/:productId

### Dashboard admin

- Dashboard /dashboard
- Crear producto /dashboard/new
- Editar producto /dashboard/:productId/edit
- Eliminar producto /dashboard/:productId/delete

### API REST

- Listar productos GET /api/products
- Detalle producto GET /api/products/:productId
- Crear producto POST /api/products
- Editar producto PUT /api/products/:productId
- Eliminar producto DELETE /api/products/:productId

## Testing

- Ejecutar tests
  npm test

### swagger

- Documentación API REST en /docs

/docs/swagger.js

### SSR Helpers

- Separan la generación de HTML de la lógica:

- baseHtml → layout base

- getNavBar → navegación

- getProductCards → tarjetas

- templates de formularios

- CRUD

- Alertas de error

- login y dashboard
