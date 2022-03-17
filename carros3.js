

class carro{
    constructor(modelo, preco){
        this.modelo = modelo
        this.preco = preco
    }

    get preco(){
        return this._preco
    }
}

let carro1 = new carro("Uno", 20000)

let carro2 = new carro("Ferrari", 5000000000 )

let carros =[
    carro1,
    carro2
];

console.log(carros)
