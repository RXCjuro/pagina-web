const formLogin = document.getElementById("formLogin")
const correoLogin = document.getElementById("correoLogin")
const claveLogin = document.getElementById("claveLogin")
const mensajeLogin = document.getElementById("mensajeLogin")

formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const correo = correoLogin.value.trim();
    const clave = claveLogin.value.trim();

    if (correo === "" || clave === "") {
        mensajeLogin.textContent = "todos los campos son obligatorios";
        mensajeLogin.style.color = "#dc2626"
        return;
    }

    const usuariosGuardados = localStorage.getItem("usuariosToñita");

    if (usuariosGuardados === null) {
        mensajeLogin.textContent = "No hay usuario registrado, Crear una cuenta primero";
        mensajeLogin.style.color = "#dc2626"
        return;
    }

    const usuarios = JSON.parse(usuariosGuardados);

    let usuarioEncontrado = null;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].correo === correo && usuarios[i].clave === clave) {
            usuarioEncontrado = usuarios[i];
            break;
        }
    }

    if (usuarioEncontrado === null) {
        mensajeLogin.textContent = "Correo o contraseña incorrecto";
        mensajeLogin.style.color = "#dc2626";
        return;
    }

    localStorage.setItem("usuarioActivoToñita", JSON.stringify(usuarioEncontrado));

    mensajeLogin.textContent = "Inicio de sesión correcto";
    mensajeLogin.style.color = "#16a34a";

    alert("login correcto");

    window.location.href = "../index.html";

});