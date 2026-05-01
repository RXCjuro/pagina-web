const zonaUsuario = document.getElementById("zonaUsuario");

const usuarioGuardado = localStorage.getItem("usuarioActivoToñita");

if (usuarioGuardado === null) {
    zonaUsuario.innerHTML = `
        <a href="paginas/login.html" class="btn btn-sm btn-outline-secondary border-0">
            <i class="fa-solid fa-user me-1"></i> Iniciar Sesión
        </a>
    `;
} else {
    const usuario = JSON.parse(usuarioGuardado);

    zonaUsuario.innerHTML = `
    <span class="me-3 fw-bold fs-6">Hola, ${usuario.nombre}</span>
    <button id="cerrarSesion" class="btn btn-sm fw-bold border-0 cerrar-btn">
        Cerrar sesión
    </button>
`;

    const botonCerrar = document.getElementById("cerrarSesion");

    botonCerrar.addEventListener("click", function () {
        localStorage.removeItem("usuarioActivoToñita");
        window.location.href = "index.html";
    });
}