var Coche = (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    return Coche;
}());
var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();
coche.setColor('rojo');
coche_dos.setColor('azul');
coche_tres.setColor('verde');
console.log("El color del coche 1 es " + coche.getColor());
console.log("El color del coche 2 es " + coche_dos.getColor());
console.log("El color del coche 3 es " + coche_tres.getColor());
