// El comando para tener un watch en el compilador es el con el siguiente comando:   tsc -w *.ts
interface CocheBase{
    getModelo(): string;
    getVelocidad(): number;
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number ;

    constructor(modelo=null){
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null){
              this.modelo = "BMW Generico";

        }else{
            this.modelo = modelo
        }
    }

    public getModelo(){
        return this.modelo
    }

    public setModelo(modelo){
        this.modelo = modelo
    }

    public getColor(){
        return this.color;
    }

    public setColor(color:string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad ++;
    }

    public frenar(){
        this.velocidad --;
    }

    public getVelocidad():number{
        return this.velocidad;
    }
}

var coche = new Coche("Ferrari");
var coche_dos = new Coche();
var coche_tres = new Coche();


coche.setColor('rojo');
coche.acelerar();
coche.acelerar();
coche.acelerar();


console.log("El modelo del coche 1 es :"+ coche.getModelo());
console.log("El color del coche 1 es "  + coche.getColor());
console.log("La velocidad del coche es  "  + coche.getVelocidad());

coche.frenar();
console.log("La velocidad del coche es  "  + coche.getVelocidad());


/*
coche_dos.setColor('azul');
coche_tres.setColor('verde');

console.log("El color del coche 2 es "  + coche_dos.getColor());
console.log("El color del coche 3 es "  + coche_tres.getColor());
*/