# BlackHat - Proyecto Final

## Introducción

Bienvenidos a **BlackHat**, un e-commerce desarrollado como proyecto final para el curso de **React JS 57770**. Este proyecto consiste en una tienda en línea que permite a los usuarios navegar por diferentes categorías de productos, visualizar detalles de los mismos, agregarlos a un carrito de compras y finalmente realizar una orden de compra.

## Ideas y Enfoque

Para este proyecto, decidí implementar una tienda en línea centrada en la venta de ropa. Las principales funcionalidades incluidas son:

- **Navegación por categorías**: Los usuarios pueden filtrar productos por categorías.
- **Detalle de productos**: Cada producto tiene una página de detalle donde se muestra su información completa.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, actualizar cantidades y eliminar productos.
- **Proceso de compra**: Al finalizar la compra, se solicitan los datos del comprador y se registra la orden en una base de datos.

### Dependencias Utilizadas

Para este proyecto, se utilizaron las siguientes dependencias adicionales:

- **react-router-dom**: Para gestionar las rutas de la aplicación.
- **firebase**: Para manejar la base de datos y el backend de la aplicación.
- **sweetalert2**: Para mostrar alertas y notificaciones a los usuarios.
- **bootstrap**: Para el diseño y estilos de la aplicación.

## Decisiones de Diseño

### Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:

- **components**: Contiene los componentes reutilizables como NavBar, Footer, Item, etc.
- **context**: Maneja el estado global del carrito utilizando React Context API.
- **data**: Incluye funciones de obtención de datos simuladas y reales.
- **firebase**: Configuración y conexión con Firebase.
- **styles**: Archivos CSS personalizados.

### Dependencias Adicionales

- **firebase**: Elegí Firebase para gestionar la base de datos porque proporciona una solución rápida y eficiente para el backend, permitiendo la creación, lectura y actualización de datos de manera sencilla.
- **sweetalert2**: Para mejorar la experiencia del usuario con alertas estilizadas y fáciles de implementar.

### Estilos y Responsividad

Utilicé **Bootstrap** para garantizar que la aplicación sea visualmente atractiva y responsiva en diferentes dispositivos. Además, personalicé algunos estilos utilizando CSS para ajustarlos a las necesidades específicas del proyecto.

### Gestión del Carrito

El estado del carrito se maneja mediante React Context API, lo que permite compartir el estado globalmente en toda la aplicación y simplifica la gestión de los productos añadidos al carrito.

### Manejo de Rutas

**react-router-dom** se utiliza para gestionar la navegación de la aplicación, permitiendo rutas dinámicas para las categorías y los detalles de los productos, así como una página de error personalizada para rutas no encontradas.

---

Espero que este proyecto cumpla con las expectativas y demuestre el conocimiento adquirido durante el curso. ¡Gracias por la oportunidad de aprender y desarrollar este proyecto!

**Santiago Matti**

**React JS 57770**
