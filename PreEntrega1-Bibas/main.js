
/* permiso para entrar*/
Swal.fire({
  title: 'Hey, tenes mas de 18 años?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Si',
  denyButtonText: `No`,
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire('Podes comprar tranquil@', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('No podes comprar, deciles a tus papis', '', 'info')
  }
})

/*lista de productos*/
principal();
function principal() {

  let productoStock = [
    { id: 1, nombre: "Whiskey", precio: 2500, imagen: "imagenes-proyecto/whiskey.jpg" },
    { id: 2, nombre: "Vocka absolub", precio: 3000, imagen: "imagenes-proyecto/vocka.jpg" },
    { id: 3, nombre: "Vino Tinto Mauro", precio: 5000, imagen: "imagenes-proyecto/vino-tinto.jpg" },
    { id: 4, nombre: "Vino Blanco Da Vinci", precio: 2300, imagen: "imagenes-proyecto/vino-blanco.jpg" },
    { id: 5, nombre: "Ron Havanna", precio: 6000, imagen: "imagenes-proyecto/ron.jpg" },
    { id: 6, nombre: "Fernet", precio: 2800, imagen: "imagenes-proyecto/fernet.jpg" },
    { id: 7, nombre: "Champagne", precio: 1000, imagen: "imagenes-proyecto/champagne.jpg" },
    { id: 8, nombre: "Cerveza Heineken", precio: 1500, imagen: "imagenes-proyecto/cerveza.png" },
    { id: 9, nombre: "Anis", precio: 3800, imagen: "imagenes-proyecto/anis.jpg" },
    { id: 10, nombre: "Vocka Smirnoff", precio: 3900, imagen: "imagenes-proyecto/vockasmirnoff.jpg" },
    { id: 11, nombre: "Vino Tinto Alma Mora", precio: 3500, imagen: "imagenes-proyectovinotintoalmamora.jpg" },
    { id: 12, nombre: "Vino Tinto Trapiche Cabernet Sauvignon", precio: 4000, imagen: "imagenes-proyecto/vinotintotrapiche.jpg" },
    { id: 13, nombre: "Vino Blanco Trapiche Cosecha Tardía", precio: 3900, imagen: "imagenes-proyecto/vinoblancotrapiche.jpg" },
    { id: 14, nombre: "Ron Santa Teresa", precio: 7000, imagen: "imagenes-proyecto/ronsantateresa.jpg" },
    { id: 15, nombre: "Ron Cacique", precio: 6800, imagen: "imagenes-proyecto/roncacique.jpg" },
    { id: 16, nombre: "Ron Carupano Añejo", precio: 7500, imagen: "imagenes-proyecto/roncarupano.jpg" },
    { id: 17, nombre: "Cerveza Corona", precio: 1000, imagen: "imagenes-proyecto/cervezacorona.jpg" },
    { id: 18, nombre: "Cerveza Solera", precio: 1500, imagen: "imagenes-proyecto/cervezapolar.jpg" },
    { id: 29, nombre: "Cerveza Polar", precio: 1800, imagen: "imagenes-proyecto/cervezapolar.jpg" }
  ];
  /* Barra de navegacion*/
  let inputBuscador = document.getElementById('buscador')
  let botonBuscar = document.getElementById('buscar')
  botonBuscar.addEventListener('click', () => filtrar(productoStock, inputBuscador, "nombre"))

  renderizarCarrito()
  renderizarTarjetas(productoStock)

}

/* carrito */

function filtrar(productos, input, propiedad) {
  let valorInput = input.value.toLowerCase();
  let productosFiltrados = productos.filter(producto => producto[propiedad].toLowerCase().includes(valorInput));
  renderizarTarjetas(productosFiltrados);
}

function renderizarTarjetas(productos) {
  let contenedor = document.getElementById("productos");
  contenedor.innerHTML = "";
  productos.forEach(producto => {
    let tarjetaProducto = document.createElement("div");
    tarjetaProducto.classList.add("tarjetaProducto");
    tarjetaProducto.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <button id=${producto.id}>Agregar al carrito</button>
  `;
    contenedor.appendChild(tarjetaProducto);

    let botonAgregarAlCarrito = document.getElementById(producto.id);
    botonAgregarAlCarrito.addEventListener("click", () => agregarAlCarrito(producto));
  });
}

function renderizarCarrito() {
  let contenedor = document.getElementById("carrito");
  contenedor.innerHTML = "";
  let carrito = recuperarCarrito();
  let total = 0; 
  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>El carrito está vacío</p>";
  } else {
    let tablaCarrito = document.createElement("table");
    tablaCarrito.innerHTML = `
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;

    let tbody = tablaCarrito.querySelector("tbody");

    carrito.forEach(producto => {
      let fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>${producto.precio * producto.cantidad}</td>
      `;
      tbody.appendChild(fila);

      // Sumar el subtotal al total de la compra
      total += producto.precio * producto.cantidad;
    });

    contenedor.appendChild(tablaCarrito);
    let filaTotal = document.createElement("tr");
    filaTotal.innerHTML = `
      <td colspan="3">Total</td>
      <td>${total}</td>
    `;
    tbody.appendChild(filaTotal);
  }
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
let botonVaciarCarrito = document.getElementById("vaciarCarrito");
botonVaciarCarrito.addEventListener("click", vaciarCarrito);
botonVaciarCarrito.classList.add("boton-carrito");
  renderizarCarrito();

}

console.log(localStorage.getItem("carrito"))

function agregarAlCarrito(producto) {
  let carrito = recuperarCarrito();
  let productoEnCarrito = carrito.find(item => item.id === producto.id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito();
}

function recuperarCarrito() {
  return localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
}
/*footer*/

document.getElementById('ir-arriba').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
})

