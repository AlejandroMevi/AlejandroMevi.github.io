// se construye un array con el nombre de personas
// definiendo dos nuevas personas desde codigo
const personas = [
    new Persona("Alejandro", "Mejia"),
    new Persona("Diana", "Garcia")
];
// se crea la funcion que se ejecutara al iniciar la pagin
function mostrarPersonas(){
    console.log("Mostrar personas");
    // se asigna una variable vacia para posteriormente
    // concatenar los valores que se recuperan del array
    let texto = '';
    // se crea variable persona para poder recorrer el array
    // y recuperar en la variable los valores
    for(let persona of personas){
        console.log( persona );
        // se concatenan en la variable vacia
        texto += `<li>${persona.nombre} ${persona.apellido}<li/>`;
    }
    // se recupera el elemento de html "persona" que es un div
    // y se le asigna la variable de texto concatenada
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if(nombre.value != "" && apellido.value != ""){
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
    }
    else{
        console.log("No hay informacion que agregar");
    }
}