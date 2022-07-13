// OBJETOS
class Tema {
    constructor (nombre, dificultad, preguntas)
    {
        this.nombre = nombre
        this.dificultad = dificultad
        this.preguntas = preguntas
    }
}
const Tema1 = new Tema ("matematica", "media", 5)
const Tema2 = new Tema ("historia", "alta", 6)
const Tema3 = new Tema ("arte", "media", 8)
const Tema4 = new Tema ("deporte", "baja", 5)

//ARRAY
const opciones = [Tema1, Tema2, Tema3, Tema4]

opciones.push( new Tema ("lengua","media",5))


//FUNCIONES 

function buscarTema(opciones){
    let opcionElegida = opciones.find( tema => tema.nombre == eleccion)
    if (opcionElegida == undefined) {
        console.log('opcion no encontrado')
    }else{
        console.log(opcionElegida)
    }
}

function buscarTemas(opciones){
    let dificil = prompt('ingrese un nivel de dificultad (alta, media o baja)').toLocaleLowerCase()
    let dificultadElegida = opciones.filter (tema => tema.dificultad == dificil)
    if(dificultadElegida.length ==0){
        console.log ("no hay temas")
    }else{
        console.log(dificultadElegida)
    }
}
//USUARIO

let eleccion
do{
    eleccion = prompt('Elija un tema').toLowerCase()
    if( eleccion === "matematica" || eleccion === "historia" || eleccion === "arte" || eleccion === "deporte" || eleccion === "lengua"){
        buscarTema(opciones)
        break
    }else{
       alert ("El tema seleccionado no existe, por favor pruebe otro")
    }
}while ( eleccion != "matematica" || eleccion != "historia" || eleccion != "arte" ||eleccion != "deporte" || eleccion != "lengua")

do{
    busqueda = parseFloat(prompt ("Ingrese un numero: 1 para buscar por dificultad o 2 para frenar"))
}while(isNaN(busqueda) && busqueda >=1 && busqueda <=2)

switch(busqueda){
    case 1:
        buscarTemas(opciones)
        break
    case 2 :
        break
   
}