// SOLO para el index (buscador)
document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("inputBusqueda");
    const boton = document.getElementById("btnBuscar");

    if (input && boton) {

        function buscar() {
            let valor = input.value.trim();

            if (valor !== "") {
                window.location.href = `../../buscar.html?q=${encodeURIComponent(valor)}`;
            }
        }

        boton.addEventListener("click", buscar);

        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                buscar();
            }
        });
    }
});


// SOLO para busqueda.html (mostrar resultados)
document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("resultados");

    // si no existe, salir (esto evita errores en index)
    if (!contenedor) return;

    const params = new URLSearchParams(window.location.search);
    const query = params.get("q");

    const productos = [
        { nombre: "Pan francés", categoria: "panaderia", precio: 1 },
        { nombre: "Croissant", categoria: "panaderia", precio: 3 },
        { nombre: "Café americano", categoria: "cafeteria", precio: 5 },
        { nombre: "Capuccino", categoria: "cafeteria", precio: 7 },
        { nombre: "Sandwich", categoria: "catering", precio: 10 }
    ];

    if (query) {
        let resultados = productos.filter(p =>
            p.nombre.toLowerCase().includes(query.toLowerCase())
        );

        if (resultados.length > 0) {
            resultados.forEach(p => {
                contenedor.innerHTML += `
                    <div class="card">
                        <h3>${p.nombre}</h3>
                        <p>Categoría: ${p.categoria}</p>
                        <button onclick='agregarAlCarrito(${JSON.stringify(p)})'>
                            Agregar al carrito
                        </button>
                    </div>
                `;
            });
        } else {
            contenedor.innerHTML = "<p>No se encontraron resultados</p>";
        }
    }
});