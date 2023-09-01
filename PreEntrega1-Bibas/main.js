function saludar() {
    console.log("Hola")
}
saludar()

let edadIngresada = confirm("¿tenes mas de 18 años?")

if (edadIngresada === true) {
    console.log("Podes comprar tranquil@");

} else {
    console.log("No podes comprar, eres menor de 18");
}

/*lista de productos*/
let productos = [
    { id: 1, nombre: "whiskey", precio: 2500 },
    { id: 2, nombre: "vocka absolub", precio: 3000 },
    { id: 3, nombre: "vino tinto mauro", precio: 5000 },
    { id: 4, nombre: "vino blanco da vinci", precio: 2300 },
    { id: 5, nombre: "ron havanna", precio: 6000 },
    { id: 6, nombre: "fernet", precio: 2800 },
    { id: 7, nombre: "champagne", precio: 1000 },
    { id: 8, nombre: "cerveza heineken", precio: 1500 },
    { id: 9, nombre: "anis", precio: 3800 },
    { id: 10, nombre: "vocka smirnoff", precio: 3900 },
    { id: 11, nombre: "vino tinto alma mora", precio: 3500 },
    { id: 12, nombre: "vino tinto trapiche cabernet sauvignon", precio: 4000 },
    { id: 13, nombre: "vino blanco  trapiche cosecha tardia ", precio: 3900 },
    { id: 14, nombre: "vino blanco alma mora pinot grigio", precio: 4000 },
    { id: 15, nombre: "ron santa teresa", precio: 7000 },
    { id: 16, nombre: "ron cacique", precio: 6800 },
    { id: 17, nombre: "ron carupano añejo", precio: 7500 },
    { id: 18, nombre: "cerveza corona", precio: 1000 },
    { id: 19, nombre: "cerveza solera", precio: 1500 },
    { id: 20, nombre: "cerveza polar", precio: 1800 },

];

/*suma de impuestos a los productos*/
function sumarImpuestos(productos) {
    const impuestoPorcentaje = 0.21;
    return productos.map(producto => ({
        ...producto,
        precioConImpuestos: producto.precio * (1 + impuestoPorcentaje)
    }));
}
/*mostrar lista de producto*/
function mostrarProductosConImpuestos(productosMostrados) {
    let mensaje = 'Lista de Productos con Impuestos incluidos:\n\n';

    productosMostrados.forEach(producto => {
        mensaje += `${producto.nombre} - $${producto.precioConImpuestos.toFixed(2)}\n`;
    });

    alert(mensaje);
}
/*filtrar los productos por nombre*/
function filtrarProductosPorNombre() {
    const filtroNombre = prompt('Ingresa el nombre del producto que buscas:');
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
    );

    if (productosFiltrados.length > 0) {
        const productosConImpuestos = sumarImpuestos(productosFiltrados);
        mostrarProductosConImpuestos(productosConImpuestos);
    } else {
        alert('No se encontraron productos con ese nombre.');
    }
}

/*aparece en la pantalla*/
window.onload = () => {
    filtrarProductosPorNombre();
    const productosConImpuestos = sumarImpuestos(productos);

};
/*footer*/
document.getElementById('ir-arriba').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

