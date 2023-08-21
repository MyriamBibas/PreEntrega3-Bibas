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

// login de la pagina 
let login = true;

while (login) {
    let usuario = prompt("Ingresa tu Usuario");
    let contraseña = prompt("Ingresa tu contraseña");
    let validar = usuario === "myri" && contraseña === "1234b";

    if (validar) {
        alert(`Bienvenido ${usuario}`);
        break;
    } else {
        alert("Usuario o contraseña incorrecto");
    }
}


/*lista de productos*/
let productos = [
    { id: 1, nombre: "whiskey", precio: 2500 },
    { id: 2, nombre: "vocka", precio: 3000 },
    { id: 3, nombre: "vino tinto", precio: 5000 },
    { id: 4, nombre: "vino blanco", precio: 2300 },
    { id: 5, nombre: "ron", precio: 6000 },
    { id: 6, nombre: "fernet", precio: 2800 },
    { id: 7, nombre: "champagne", precio: 1000 },
    { id: 8, nombre: "cerveza", precio: 1500 },
    { id: 9, nombre: "anis", precio: 3800 },
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