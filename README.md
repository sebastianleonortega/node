# Gestión de Productos

¡Bienvenido al software de Gestión de Productos!

Este software te permite gestionar productos a través de operaciones CRUD (Crear, Listar, Actualizar, Eliminar). Los usuarios deben registrarse e iniciar sesión para poder realizar estas funciones.

## Requisitos

- Node.js.
- PostgreSQL.
- Postman (Opcional)

## Instalación

1. Clona el repositorio .
   ```bash
   https://github.com/sebastianleonortega/node.git
2. Instala las dependencias.
   ```bash
   * cd <Nombre-proyecto>
   * npm install
3. Configura la base de datos PostgreSQL.
   - Crea una base de datos PostgreSQL.
   - Actualiza las variables de entorno del archivo `.env` con la información de tu base de datos PostgreSQL.
   - para crear las tablas y poblarlas, ir a la carpeta `scrips` y al archivo `_updateSQL`
   

4. Instala e Inicia el servidor:
   ```bash
   * npm i -g nodemon
   * npm run dev

## Uso

1. **Registro e inicio de sesión**:
   - Regístrate en el sistema para obtener una cuenta `http://localhost:3100/auth/register`.
   - Inicia sesión con tus credenciales `http://localhost:3100/auth/`, despues de iniciado sesion el sistema te devolvera un jwt que es necesario para el CRUD de producto

2. **Operaciones CRUD DE PRODUCTO**:
   - **Crear**: Agrega nuevos productos `http://localhost:3100/product/`.
   - **Listar todos**: Visualiza todos los productos existentes `http://localhost:3100/product`.
   - **Listar uno**: Visualiza un producto existentes `http://localhost:3100/product/<id-del-producto>`.
   - **Actualizar**: Edita la información de un producto `http://localhost:3100/product/<id-del-producto>`.
   - **Eliminar**: Elimina un producto seleccionándo `http://localhost:3100/product/<id-del-producto>`.


## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir al desarrollo de este software, por favor sigue los pasos detallados en el apartado de Contribución en el archivo README del repositorio.

## Créditos

Este proyecto ha sido desarrollado por [Sebastian Leon](https://github.com/sebastianleonortega) y [Diany Garcia](https://github.com/tuusuario).