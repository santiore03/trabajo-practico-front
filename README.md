# trabajo práctico front end
UTN-Diplomatura full stack

En este proyecto se presenta una página web correspondiente a un e-commerce. 
Para su desarrollo, se utilizaron las librerías react-router-dom y context para el manejo de estados.
La página presenta un diseño responsivo desde los 320px en adelante, la cual se realizó mediante el uso de mediaqueries.

Todas las screens cuentan con un navegador para navegar entre las siguientes:
* HomePage
* CartPage
* ContactPage

A la screen restante (DetailPage) se accede desde el detalle de cada producto en particular desde la HomePage.

Desde la perspectiva funcional de la página podría mencionarse lo siguiente:

* HomePage:
En ésta screen pueden observarse:
- Los productos en venta, a cuyos detalles se accede presionando en "See Details".
- Dos filtradores, que permiten filtrar productos tanto por su nombre como por el rango de precio.

* DetailPage:
En ésta screen pueden observarse los detalles del producto seleccionado, permitiéndole al usuario seleccionar la cantidad de un producto a comprar 
y la opción de agregarlo al carrito de compras. 

* CartPage:
En ésta screen se muestran los productos agregados al carrito y la cantidad de cada uno, junto con la la costo total que representan.
Se incluye un botón de compra que simula el proceso compra.

* ContactPage:
En ésta screen se incluye un formulario para la realización de consultas.

Para la construcción de este sitio web se crearon otros 7 componentes:
* Main.jsx: Componente principal del sitio.
* App.jsx: Incluye el navegador y las rutas de las distintas screens.
* ContextProvider.jsx: Componente donde se incluyen los estados de las distintas variables y las principales funciones que involucran a éstos.
* ProductCard.jsx: Tarjetas de los distintos productos en venta.
* ProductCartCard.jsx: Tarjetas de los distintos productos para el carrito de compras.
* Counter.jsx: Contadores de las tarjetas del carrito. 
* Footter.jsx: Footers de todas las screens.

Los estilos se desarrollan en su totalidad en los siguientes archivos CSS:
* App.css
* ProductCartCard.css
* ProductCard.css
* Counter.css
* Footer.css
y desde aquellos correspondientes a las screens:
* HomePage.css
* DetailPage.css
* ContactPage.css
* CartPage.css
