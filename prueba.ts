function holaMundo(nombre){
    return "Hola Mundo Soy  " + nombre;
}

var nombre = "Harol Calzada"
var resultado = holaMundo(nombre)

var etiqueta = <HTMLElement>document.getElementById("container");
etiqueta.innerHTML = resultado;

// Varialbes y tipos

var nombre:string = "Harol Calzada"
var edad: number = 24;
var programador: boolean = true;
var langs: Array<string> = ['Python', 'Javascript', 'CSS'];
var x:any = "Permite cualquier tipo de dato"

nombre = 'LETRAS';
edad = 24;
x= 12;

etiqueta.innerHTML = nombre + " - " + edad ;

var a = 7;
var b = 12;

if (a == 7){
    let a = 4; // variable local
    var b = 1;

    console.log("Dentro del if :" + a + " - "  +b);
}
console.log("Dentro del if :" + a + " - "  +b);


// Funciones y tipado

function devuelveNumero(num:number): string{
    return "Número devuelto" + num;
}

function devuelveString(texto:string):number{
    if (texto=="hola"){
        var num =66;
    }else{
        var num = 90;
    }
    return num;
}
alert(devuelveNumero(34));
alert(devuelveString('hola'));

