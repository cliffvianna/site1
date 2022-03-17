import Automovel from "./Automovel.mjs";

class Carro extends Automovel {
    _tipo = 'carro';

    constructor(modelo, precoCompra, cor){
        super(modelo, precoCompra, cor);

        this._validaModelo(modelo);
    }

    _validaModelo(modelo){
        if(modelo.lenght < 4){
            console.log('não pode');
            return;
        }
        this._modelo = modelo;
    }

    set modelo(novoModelo){
        this._validaModelo(novoModelo);
    }
}

const carro = new Carro("Toro", 12000);
console.log(carro);


export default carro;
