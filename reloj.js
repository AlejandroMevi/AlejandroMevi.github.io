// funcion flecha para mostrar la hora
const mostrarReloj = () =>{
    // se declara variable donde recupera la fecha en general
    let fecha = new Date();
    // se asigna una variable a hora minutos y segundos
    // y la funcion flecha para darle formato
    let hr = formatoHora( fecha.getHours() );
    let min = formatoHora( fecha.getMinutes() );
    let seg = formatoHora( fecha.getSeconds() );
    // se recupera el div "hora" donde se enviaran las variables
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

    // se crean arrays con los nombres de meses y dias para mostrarlos en texto
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    // se declara variable para el dia de la semana, dia y mes
    // se recupera en numero pero con el array se convierte a texto que definimos
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    // se declara variable para concatenar las otras vvariables
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    // se recupera el div y se envia variable ya concatenada
    document.getElementById("fecha").innerHTML = fechaTexto;
    // se envia la animacion definidca en css donde toggle la quita o la pone
    // depenediendo como esta definida como se llama cada segundo
    // la quita y la pone cada segundo
    document.getElementById("contenedor").classList.toggle("animar");
}
// se le da el forma a la hora por que no muesta el 0
// con una funcion flecha
const formatoHora = (hora) =>{
    // solo a las menor de 10 se le concatena un 0
    if (hora < 10 )
    hora = "0" + hora;
    // y se regresa la hora con formato
    return hora;
}

// con esto se llama a la funcion y se define el tiempo 
// de cada cuanto tiempo se ejecuta
setInterval(mostrarReloj, 1000);