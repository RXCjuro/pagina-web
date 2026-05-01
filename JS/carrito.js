// Obtener carrito desde localStorage
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// Guardar carrito
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto
function agregarAlCarrito(producto) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    guardarCarrito(carrito);
    actualizarContador();
}

// Actualizar número del carrito
function actualizarContador() {
    let carrito = obtenerCarrito();
    let contador = document.getElementById("contadorCarrito");

    if (contador) {
        contador.textContent = carrito.length;
    }
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", actualizarContador);