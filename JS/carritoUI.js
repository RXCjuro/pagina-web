document.addEventListener("DOMContentLoaded", mostrarCarrito);

function mostrarCarrito() {
    const contenedor = document.getElementById("listaCarrito");
    const totalTexto = document.getElementById("total");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (!contenedor) return;

    contenedor.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p class='text-center'>Tu carrito está vacío</p>";
        totalTexto.textContent = "";
        return;
    }

    carrito.forEach((p, index) => {

        let precio = p.precio || 5; // precio base si no existe
        total += precio;

        contenedor.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card card-producto shadow h-100">
                    <img src="../${p.imagen}" class="card-img-top img-producto">

                <div class="card-body text-center">
                    <h5>${p.nombre}</h5>
                    <p>${p.categoria}</p>
                <p><strong>S/ ${precio.toFixed(2)}</strong></p>

                <button class="btn btn-danger w-100"
                    onclick="eliminarProducto(${index})">
                    Eliminar
                </button>
            </div>
        </div>
    </div>
`;
    });

    totalTexto.textContent = "Total a pagar: S/ " + total;
}

function eliminarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.splice(index, 1);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    mostrarCarrito();
    actualizarContador();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");

    mostrarCarrito();
    actualizarContador();
}