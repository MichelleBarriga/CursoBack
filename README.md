# Curso Backend

Este proyecto es una aplicación web que sigue los pasos de la tarea de un curso de Backend.
## Tabla de Contenido

- [Instalación](#instalación)
- [Uso](#uso)
- [Endpoints](#endpoints)
  - [GET /products](#get-products)
  - [GET /products/:id](#get-products)
  - [POST /products](#post-products)
  - [PUT /products/:id](#put-products)
  - [PATCH /products/:id](#patch-products)
  - [DELETE /products/:id](#delete-products)
  - [POST /products/filter](#post-productsfilter)
- [Autor](#autor)
- [Licencia](#licencia)

## Instalación

1. Clonar este repositorio en tu máquina local. 

    ```bash
    git clone https://github.com/MichelleBarriga/CursoBack.git
    ```
2. Instalar las dependecias con el comando:
    ```bash
    npm install
    ```

## Uso

1. Para iniciar el servidor en modo de producción.
    ```bash
    npm start
    ```
2. Para iniciar el servidor con nodemon (modo desarrollo), que reiniciará automáticamente cuando se detecten cambios en los archivos; usar:
    ```bash
    npm run dev
    ```
## Endpoints
### GET /products
Obtiene todos los productos.

### GET /products/
Obtiene un producto específico por su ID.

**Parámetros:**

**id:** ID del producto

### POST /products
Añade un nuevo producto.

Cuerpo de la Solicitud:

**Formato:** JSON
**Contenido:** Datos del nuevo producto

### PUT /products/
Actualiza un producto existente por su ID.

**Parámetros:**

**id:**  ID del producto
**Cuerpo de la Solicitud:**

**Formato:** JSON
**Contenido:** Datos actualizados del producto

### PATCH /products/
Actualiza parcialmente un producto existente por su ID.

**Parámetros:**

**id:** ID del producto
**Cuerpo de la Solicitud:**

**Formato:** JSON
**Contenido:** Datos a actualizar del producto

### DELETE /products/
Elimina un producto por su ID.

**Parámetros:**

**id:** ID del producto

### POST /products/filter
Filtra productos basados en varios parámetros.

**Cuerpo de la Solicitud:**

**Formato:** JSON
**Contenido:** Objeto filter con los siguientes campos opcionales:

- **brand:** Marca del producto
- **stockover:** Stock mayor o igual al valor especificado
- **stockbelow:** Stock menor o igual al valor especificado
- **discountover:** Descuento mayor o igual al valor especificado
- **discountbelow:** Descuento menor o igual al valor especificado
- **expireover:** Fecha de expiración mayor o igual a la fecha especificada
- **expirebelow:** Fecha de expiración menor o igual a la fecha especificada


## Autor

[Michelle Barriga](https://github.com/MichelleBarriga)

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).