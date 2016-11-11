function holaMundo(nombre) {
    return "Hola Mundo Soy  " + nombre;
}
var nombre = "Harol Calzada";
var resultado = holaMundo(nombre);
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = resultado;
// Varialbes y tipos
var nombre = "Harol Calzada";
var edad = 24;
var programador = true;
var langs = ['Python', 'Javascript', 'CSS'];
var x = "Permite cualquier tipo de dato";
nombre = 'LETRAS';
edad = 24;
x = 12;
etiqueta.innerHTML = nombre + " - " + edad;
var a = 7;
var b = 12;
if (a == 7) {
    var a_1 = 4; // variable local
    var b = 1;
    console.log("Dentro del if :" + a_1 + " - " + b);
}
console.log("Dentro del if :" + a + " - " + b);
// Funciones y tipado
function devuelveNumero(num) {
    return "Número devuelto" + num;
}
function devuelveString(texto) {
    if (texto == "hola") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString('hola'));
