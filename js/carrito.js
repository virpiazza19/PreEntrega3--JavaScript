//Productos
const Tapetes = [
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
    divItem.innerHTML = `<img class="fotosProductos" src="${imagen}" alt="${nombre}">
                        <h5 class="tituloItem">${nombre}</h5>
                        <form class="formProducto" id="${id}">
                            <input type="number" class="form-control" name="unidades" placeholder="unidades" min="1" max="${stock}">
                            <button type="submit" class="button carritoButton">Agregar</button>
                        </form>`;

    contenedorTarjetas.appendChild(divItem); 
};

const mostrarTapetes = () => {
    const contenedorTarjetas = document.querySelector("#contenedorTarjetas");
    contenedorTarjetas.innerHTML = "";

    Tapetes.forEach((tapete) => {
        if (tapete.stock !== 0) {
            verTapete(tapete);
        }
    });

    const agregarAlCarritoForms = document.querySelectorAll(".formProducto");
    agregarAlCarritoForms.forEach((agregarAlCarritoForm, index) => {
        agregarAlCarritoForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const unidadesPorProducto = parseInt(
                e.target.querySelector("input[name='unidades']").value
            );

            const tapete = Tapetes[index];

            if (unidadesPorProducto <= tapete.stock) {
                agregarAlCarrito(tapete, unidadesPorProducto);

                agregarAlCarritoForm.reset();
            } else {
                alert("No hay suficiente stock disponible");
            }
        });
    });
};

const agregarAlCarrito = (tapete, unidadesPorProducto) => {
    const indexDelProducto = tapetesSeleccionados.findIndex(item => item.id === tapete.id);
    if (indexDelProducto !== -1) {
        tapetesSeleccionados[indexDelProducto].cantidad += unidadesPorProducto;
    } else {
        tapetesSeleccionados.push({
            id: tapete.id,
            nombre: tapete.nombre,
            cantidad: unidadesPorProducto,
        });
    }

    tapete.stock -= unidadesPorProducto;
    cantidadTotal += unidadesPorProducto;
    console.log(tapetesSeleccionados);
    console.log(cantidadTotal);
    actualizarCarrito();
};

const actualizarCarrito = () => {
    const unidadesCarrito = document.querySelector("#unidadesCarrito");
    unidadesCarrito.innerText = cantidadTotal;
};

mostrarTapetes();