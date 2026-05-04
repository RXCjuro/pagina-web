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
    mostrarNotificacion(producto.nombre + " agregado al carrito");
}

// Actualizar número del carrito
function actualizarContador() {
    let carrito = obtenerCarrito();
    let contador = document.getElementById("contadorCarrito");

    if (contador) {
        contador.textContent = carrito.length;
    }
}

// Notificación visual
function mostrarNotificacion(mensaje) {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.style.position = "fixed";
    alerta.style.top = "20px";
    alerta.style.right = "20px";
    alerta.style.background = "#d97706";
    alerta.style.color = "white";
    alerta.style.padding = "15px 25px";
    alerta.style.borderRadius = "10px";
    alerta.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    alerta.style.zIndex = "9999";
    alerta.style.fontWeight = "bold";

    document.body.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 2000);
}

// Ejecutar al cargar la página
document.addEventListener("DOMContentLoaded", actualizarContador);