class automovel{
    _imposto = 0.12
    _comissaoVendedor = 0.05
    _acrescimo = 0.10

    contructor(modelo, precoCompra, cor, tipo){
        this._modelo = modelo
        this._precoCompra = precoCompra
        this._cor = cor
        this._tipo = tipo
    }

    precoVenda(){
        return this._precoCompra + (this._precoCompra * this._imposto )
            + (this._precoCompra * this._comissaoVendedor)
            + (this._precoCompra * this._acrescimo)
    }
}

class Carro extends automovel {
    tipo = 'carro'
    constructor(modelo, precoCompra, cor, ){
        super(modelo, precoCompra, cor,)
    }
}

let carro1 = ('corolla', 50000, 'azul')
