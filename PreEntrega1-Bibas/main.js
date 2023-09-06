
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
  /* Barra de navegacion*/
 
let searchForm = document.getElementById("search-form");
let navbarWidth = document.querySelector(".navbar-collapse").offsetWidth;
let searchFormWidth = searchForm.offsetWidth;
let marginLeft = (navbarWidth - searchFormWidth) / 2;
searchForm.style.marginLeft = marginLeft + "px";

/*lista de productos*/
function principal (){

  let productoStock = [
    { id: 1, nombre: "whiskey", precio: 2500, imagen: "imagenes-proyecto/whiskey.jpg" },
    { id: 2, nombre: "vocka absolub", precio: 3000, imagen: "imagenes-proyecto/vocka.jpg" },
    { id: 3, nombre: "vino tinto mauro", precio: 5000, imagen: "imagenes-proyecto/vino-tinto.jpg" },
    { id: 4, nombre: "vino blanco da vinci", precio: 2300, imagen: "imagenes-proyecto/vino-blanco.jpg" },
    { id: 5, nombre: "ron havanna", precio: 6000, imagen: "imagenes-proyecto/ron.jpg" },
    { id: 6, nombre: "fernet", precio: 2800, imagen: "imagenes-proyecto/fernet.jpg" },
    { id: 7, nombre: "champagne", precio: 1000, imagen: "imagenes-proyecto/champagne.jpg" },
    { id: 8, nombre: "cerveza heineken", precio: 1500, imagen: "imagenes-proyecto/cerveza.png" },
    { id: 9, nombre: "anis", precio: 3800, imagen: "imagenes-proyecto/anis.jpg" },
    { id: 10, nombre: "vocka smirnoff", precio: 3900, imagen: "imagenes-proyecto/vockasmirnoff.jpg" },
    { id: 11, nombre: "vino tinto alma mora", precio: 3500, imagen: "imagenes-proyectovinotintoalmamora.jpg" }, // Corregí el nombre de la imagen
    { id: 12, nombre: "vino tinto trapiche cabernet sauvignon", precio: 4000, imagen: "imagenes-proyecto/vinotintotrapiche.jpg" }, // Corregí el nombre de la imagen
    { id: 13, nombre: "vino blanco trapiche cosecha tardía", precio: 3900, imagen: "imagenes-proyecto/vinoblancotrapiche.jpg" }, // Corregí el nombre de la imagen
    { id: 14, nombre: "ron santa teresa", precio: 7000, imagen: "imagenes-proyecto/ronsantateresa.jpg" }, // Corregí el nombre de la imagen
    { id: 15, nombre: "ron cacique", precio: 6800, imagen: "imagenes-proyecto/roncacique.jpg" }, // Corregí el nombre de la imagen
    { id: 16, nombre: "ron carupano añejo", precio: 7500, imagen: "imagenes-proyecto/roncarupano.jpg" }, // Corregí el nombre de la imagen
    { id: 17, nombre: "cerveza corona", precio: 1000, imagen: "imagenes-proyecto/cervezacorona.jpg" }, // Corregí el nombre de la imagen
    { id: 18, nombre: "cerveza solera", precio: 1500, imagen: "imagenes-proyecto/cervezapolar.jpg" }, // Corregí el nombre de la imagen
    { id: 29, nombre: "cerveza polar", precio: 1800, imagen: "imagenes-proyecto/cervezapolar.jpg" } // Corregí el nombre de la imagen
];

let contenedor = document.getElementById('producto');

productoStock.forEach(function (producto) {
    renderizarTarjeta(producto);
});
}

function renderizarTarjeta(producto) {
let tarjetaProducto = document.createElement("div");
tarjetaProducto.classList.add("tarjetaProducto");
tarjetaProducto.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <img src="${producto.imagen}" alt="${producto.nombre}"> 
`;

contenedor.appendChild(tarjetaProducto);
}

principal();


/*footer*/

document.getElementById('ir-arriba').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

