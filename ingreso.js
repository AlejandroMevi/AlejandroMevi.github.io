// se crea clase hija donde se recupera la descripcion y valor
// y se inicia el id de la clase hija con valor estatico
class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}