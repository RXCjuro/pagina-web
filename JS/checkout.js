document.addEventListener("DOMContentLoaded", mostrarResumen);

function mostrarResumen() {
    const contenedor = document.getElementById("resumen");
    const totalTexto = document.getElementById("total");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>No hay productos</p>";
        return;
    }

    carrito.forEach(p => {
        let precio = p.precio || 5;
        total += precio;

        contenedor.innerHTML += `
            <div class="d-flex justify-content-between">
                <span>${p.nombre}</span>
                <span>S/ ${precio}</span>
            </div>
        `;
    });

    totalTexto.textContent = "Total: S/ " + total;
}

function finalizarCompra() {

    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let pago = document.getElementById("pago").value;

    if (!nombre || !direccion || !telefono || !pago) {
        alert("Completa todos los campos");
        return;
    }

    alert("🎉 Compra realizada con éxito");

    // limpiar carrito
    localStorage.removeItem("carrito");

    // redirigir
    window.location.href = "../index.html";
}