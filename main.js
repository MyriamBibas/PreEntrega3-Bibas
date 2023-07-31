let edadIngresada = confirm("Hola!, tenes mas de 18 años?")

if (edadIngresada === true){
    console.log ("Podes comprar tranquil@");

}else {
    console.log ("No podes comprar, eres menor de 18");
}

// login de la pagina 
let login = true
while (login===true){
let usuario = prompt ("Ingresa tu Usuario");
let contraseña = prompt ( "Ingresa tu contraseña");
let validar = (usuario=== "Myri" && contraseña === "1234b");

if (validar){
    alert ('Bienvenido$(usuario)');
    login=false
    breack
    alert ("Usuario o contraseña incorrecto");
}
}
