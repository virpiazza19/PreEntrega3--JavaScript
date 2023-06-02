//Productos
const tapetes = [
    {
        id: "tapete00001",
        nombre: "Alfombra Panaderos",
        stock: 10,
        imagen: "https://drive.google.com/uc?export=view&id=13FyA0CzHqxTTaGXUdhsh5o3RQPZe5_ED"
    },
    {
        id: "tapete00002",
        nombre: "Alfombra K9",
        stock: 9,
        imagen: "https://drive.google.com/uc?export=view&id=1g3spd-pdMXTKf1B6WQ5lw3vveNoP6a_2"
    },
    {
        id: "tapete00003",
        nombre: "Alfombra Slices",
        stock: 15,
        imagen: "https://drive.google.com/uc?export=view&id=1rWN3o_bcQD3fy3_0WO9pP-NEPZldchuX"
    },
    {
        id: "tapete00004",
        nombre: "Alfombra Arcor",
        stock: 12,
        imagen: "https://drive.google.com/uc?export=view&id=1P-JFzcAhVt0CPZSl3aeP5bCIJSDCxyFY"
    },
    {
        id: "tapete00005",
        nombre: "Alfombra Caramelitos",
        stock: 6,
        imagen: "https://drive.google.com/uc?export=view&id=18TIaJkK0bjfqF5zogMcoKpxFSJA5P4jl"
    },
    {
        id: "tapete00006",
        nombre: "Alfombra Bajo El Mar",
        stock: 1,
        imagen: "https://drive.google.com/uc?export=view&id=1XoxonhjIMIOQJhHE8OnqXLTOd2Md6GoL"
    }
]

const tapetesSeleccionados = [];
let cantidadTotal = 0;

const verTapete = ({ id, nombre, stock, imagen }) => {
  const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
  const divItem = document.createElement("div");
  divItem.setAttribute("data-aos", "zoom-in");
  divItem.className = "items";
  divItem.innerHTML = `<img class="fotosProductos"
    src="${imagen}"
    alt="${nombre}">
  <form class="formProducto" id="${id}">
    <input type="number" class="form-control" name="unidades" value="1" min="1" max="${stock}">
    <button type="submit" class="button carritoButton">Agregar</button>
  </form>`;

  contenedorTarjetas.appendChild(divItem);
};

const verTapetes = () => {
  tapetes.forEach(tapete => {
    if (tapete.stock !== 0) {
      verTapete(tapete);
    }
  });
};

tapetes.forEach((tapete, index) => {
  const agregarAlCarrito = document.querySelector(`#${tapete.id}`);
  agregarAlCarrito.addEventListener("submit", (e) => {
    e.preventDefault();
    const unidadesPorProducto = parseInt(e.target.children["unidades"].value);
    tapetesSeleccionados.push({
      id: tapetes[index].id,
      nombre: tapetes[index].nombre,
      cantidad: unidadesPorProducto
    });
    tapetes[index].stock -= unidadesPorProducto;
    console.log(tapetesSeleccionados);
    cantidadTotal += unidadesPorProducto;
    console.log(cantidadTotal);
    const unidadesCarrito = document.querySelector(`#unidadesCarrito`);
    unidadesCarrito.innerText = cantidadTotal;
  });
});

verTapetes();


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

const listaMensajes = [];

const formulario = document.getElementById("formMensajes");
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

    console.log(nuevoMensaje);
    formulario.reset();
}
