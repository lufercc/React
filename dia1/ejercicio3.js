// craete Class Auto  and Toyota

class Auto{
    constructor(type, anio, hasSoat){
        this.type = type;
        this.anio = anio;
        this.hasSoat = hasSoat;
    }

    getType(){
        return this.type;
    }

    getAnio(){
        return this.anio;
    }

    getSoat(){
        return this.hasSoat;
    }

    setType(type){
        this.type = type;
    }

    setAnio(anio){
        this.anio = anio;
    }

    setHasSoat(hasSoat){
        this.hasSoat = hasSoat;
    }
}

class Toyota extends Auto{
    constructor(){
        super('automovil', 2019, true)
    }
}