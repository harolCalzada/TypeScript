class Programa{
    public nombre: string;
    public version: number;

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setVersion(version: number){
        this.version = version;

    }

    getVersion(){
        return this.version;
    }


}

class EditorVideo extends Programa{
    public timeline: number;

    setTimeline(timeline: number){
        this.timeline = timeline;
    }

    getTimeline(){
        return this.timeline;
    }

    getAllData():string{
        return this.getNombre() + " - " + this.getVersion() + " - " + this.getTimeline();
    }
}

var editor = new EditorVideo();
editor.setNombre("Camtasia Studio");
editor.setVersion(1);
editor.setTimeline(4000);


console.log(editor.getAllData());

//Logica  del formulario

var programas = [];

function guardar(){
    var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();
    var programa = new Programa();
    programa.setNombre(nombre);
    programa.setVersion(1);
    programas.push(programa);

    var list = "";

    for (var i = 0; i < programas.length; i++){
        list = list + "<li>" + programas[i].getNombre() + "</li>";
    }

    var listado = <HTMLElement>document.getElementById("listado");
    listado.innerHTML = list;

    (<HTMLInputElement>document.getElementById("nombre")).value= "";
}