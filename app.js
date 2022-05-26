// Se crea array con datos establecidos de ingresos y egresos
// son constantes ya que no se modificaran 
// se le da la "descripcion" y "valor" que se establece en la clase Dato
const ingresos = [
    new Ingreso("Salario", 2100.00),
    new Ingreso("Venta coche", 1500.00)
];

const egresos =[
    new Egreso("Renta departamento", 900),
    new Egreso("Ropa", 400)
];
// esta es la funcion flecha que se cargara al inciar la aplicacion
// la cual cargalas otras funciones 
let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

// se asigna una funcion flecha para sumar los ingresos
let totalIngresos = () =>{
    let totalIngreso = 0;
    // se asigna variable donde  se recuperara los valores
    // y se recorre el array de ingresos 
    for (let ingreso of ingresos){
        // se asigna variable para sumar los valores recuperados
        // valor es lo asignado en la Clase padre Dato y se extiende a
        // las clases hijas
        totalIngreso += ingreso.valor;
    }
    // regresa todos los valores recuperados en una sola variable 
    return totalIngreso;
}
// mismga funcion pero ahora para los egresos
let totalEgreso = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}
// esta es una de las funciones que se le da a la otra funcion de cargarApp
// se utiliza la funcion flecha ya que no se reutilizara
let cargarCabecero = () =>{
    // Se da variable al presupuesto total con la resta de dos funciones
    let presupuesto = totalIngresos() - totalEgreso();
    // de esta manera se saca el porcentaje
    let porcentajeEgreso = totalEgreso()/totalIngresos();
    // se recupera el div presupuesto donde se envia la variable de presupuesto 
    document.getElementById("presupuesto").innerHTML = formatoMoneda( presupuesto );
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje( porcentajeEgreso );
    // se recupera el div ingresos y egresos y se le asigna las funciones correspondientes
    document.getElementById("ingresos").innerHTML = formatoMoneda( totalIngresos() ) ;
    document.getElementById("egresos").innerHTML = formatoMoneda( totalEgreso() );
}
// se le da un formato a la moneda
const formatoMoneda = ( valor ) =>{
    // donde se regresa el valor, el mismo asignado desde la clase padre
    // se utiliza toLocalString para asignar el tipo que utilizaremos
    return valor.toLocaleString('es-MX', {style:'currency', currency:'MNX', minimumFractionDigits:2});
}
// se le da formato al porcentaje donde se utiliza tambien el parametro de valor
const formatoPorcentaje = ( valor ) =>{ 
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}

// Es la segunda funcion que carga al iniciar la pagin
const cargarIngresos = () =>{
    // se da una variable vacia para concatenar despues
    let ingresosHTML = "";
    // se reccore array con vaiable de ingreso
    for(let ingreso of ingresos){
        // donde se concatena una funcion para que se muestre en forma de lista
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    // se le asigna la variable concatenada al div de listas
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}
// se crea funcion flecha para crear la lista en HTML
const crearIngresoHTML = (ingreso)=>{
    // se asigna variable nueva para un solo ingreso que se enviara en tipo html
    // donde solo se concatenara los valores que se ingresen y se envia como funcion 
    // a la otra funcion de cargarIngresos
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda( ingreso.valor )} </div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return ingresoHTML;
}
// se crea funcion flecha que se asigna a un evento onclick
const eliminarIngreso = (id) =>{
    // se asigna una variable para buscar en el array de ingresos el id
    let indiceEliminar = ingresos.findIndex( ingreso => ingreso.id === id );
    // con elemento splice se cambia o elimina
    ingresos.splice(indiceEliminar, 1);
    // se carga el ingreso y cabecero para que se actulize al dar click al boton
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () =>{
    let egresosHTML = "";
    for(let egreso of egresos){
        egresosHTML += crearEgresosHTML(egreso);
    }
    document.getElementById("lista--egresos").innerHTML = egresosHTML;
}

const crearEgresosHTML = (egreso) =>{
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion"> ${egreso.descripcion} </div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)} </div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgreso())} </div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick="eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return egresoHTML;
}

let eliminarEgreso = (id) =>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

// se la signa la funcion al boton que tiene icono 

let agregarDato = () =>{
    // se recupera el formulario con una variable
    let forma = document.forms['forma'];
    // se recupera el tipo dependiendo de la opcion que se escoja
    let tipo = forma['tipo'];
    // se recupera la descripcion y valor que se escriba 
    // y se asigna a una variable correspondiente
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    // se comprueba que no sea nulo 
    if(descripcion.value !== '' && valor.value !== ''){
        // si no es nulo, dependiendo del tipo se le suma al arrar ingresos
        // y se crea un nuevo clase hija
        if(tipo.value === 'ingreso'){
            ingresos.push( new Ingreso(descripcion.value, +valor.value) );
            // se carga el cabecero para que actualize 
            cargarCabecero();
            // y se envia para que aparezca en la lista
            cargarIngresos();
        }
        else if(tipo.value === 'egreso'){
            egresos.push( new Egreso(descripcion.value, +valor.value));
            cargarCabecero();
            cargarEgresos();
        }
    }
}