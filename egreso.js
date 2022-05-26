// se crea clase hija donde se recupera la descripcion y valor
// y se inicia el id de la clase hija con valor estatico
class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}