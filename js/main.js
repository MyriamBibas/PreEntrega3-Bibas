function saludar (){
    console.log ("Hola")
}
saludar()

let edadIngresada = confirm("¿tenes mas de 18 años?")

if (edadIngresada === true){
    console.log ("Podes comprar tranquil@");

}else {
    console.log ("No podes comprar, eres menor de 18");
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


// seleccion de productos mas impuesto
let productos = [
    { nombre: "Producto 1", precio: 2500 },
    { nombre: "Producto 2", precio: 3000},
    { nombre: "Producto 4", precio: 5000 },
    { nombre: "Producto 5", precio: 2300 },
    { nombre: "Producto 6", precio: 6000 },
    { nombre: "Producto 7", precio: 2800},
    { nombre: "Producto 8", precio: 1000 },
    { nombre: "Producto 9", precio: 1500},
    { nombre: "Producto 10", precio: 3800},
];

const impuesto = 0.21;

for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let precioFinal = producto.precio * (1 + impuesto);
    console.log(`El total a pagar por ${producto.nombre} es ${precioFinal}`);
}

