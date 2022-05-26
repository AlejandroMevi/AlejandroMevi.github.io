console.log("Aplicacion calculadora");

function sumar(){
    // se recupera el formulario y se asigna a una 
    // variable
    const forma = document.getElementById("forma");
    // se asigna una variable para recuperarlos
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    // parseInt convierte al tipo numerico ya que se pasa de tipo String
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    // se evalua si tiene un numero
    if(isNaN(resultado))
    // Si no es numero se envia lo siguiente
    resultado = "La operacion no incluye numeros";
    // Se recupera el div resultado para asignarle la variable con los datos
    // que se han recuperado en este caso "resultado"
    document.getElementById("resultado").innerHTML = `Resultado de la suma es: ${resultado}`
    console.log(`Resultado: ${resultado}`);
}
function restar(){
    const forma = document.getElementById("forma");
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado = "La operacion no incluye numeros";
    document.getElementById("resultado").innerHTML = `Resultado de la resta es: ${resultado}`
    console.log(`Resultado: ${resultado}`);
}
function multiplicar(){
    const forma = document.getElementById("forma");
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado = "La operacion no incluye numeros";
    document.getElementById("resultado").innerHTML = `Resultado de la multiplicacion es: ${resultado}`
    console.log(`Resultado: ${resultado}`);
}
function dividir(){
    const forma = document.getElementById("forma");
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
    resultado = "La operacion no incluye numeros";
    document.getElementById("resultado").innerHTML = `Resultado de la division es: ${resultado}`
    console.log(`Resultado: ${resultado}`);
}