class Carro{
    constructor(modelo, portas, motor){
        this._modelo = modelo;
        this._portas = portas;
        this._motor = motor;
    }

}






let carro1 = new Carro("Up!", 4, '1.0')
let carro2 = new Carro("Mazda", 2, '3.0')
let carro3 = new Carro("Subaru", 4, '2.5')

let carro = [
    carro1,
    carro2,
    carro3
]
console.log(carro)