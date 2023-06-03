//Formulario contacto
class Mensajes {
    constructor(nombre, apellido, mail, telefono, mensaje) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.telefono = telefono;
        this.mensaje = mensaje;
    }
}

const formulario = document.querySelector("#formMensajes");
formulario.addEventListener("submit", agregarMensaje);

function agregarMensaje(event) {
    event.preventDefault();

    const nombre = event.target.nombre.value;
    const apellido = event.target.apellido.value;
    const mail = event.target.mail.value;
    const telefono = event.target.telefono.value;
    const mensaje = event.target.mensaje.value;

    const nuevoMensaje = new Mensajes(nombre, apellido, mail, telefono, mensaje);
    listaMensajes.push(nuevoMensaje);

    // Guardar la lista de mensajes en el Session Storage
    sessionStorage.setItem("listaMensajes", JSON.stringify(listaMensajes));

    console.log(nuevoMensaje);
    formulario.reset();
}