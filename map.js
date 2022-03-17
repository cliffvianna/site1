let listaCarros = [
    {
        modelo: 'Corola',
        valor: 80000,
    },
    {
        modelo: 'Celta',
        valor: 12000,
    },
    {
        modelo: 'Fusca',
        valor: 500000,
    },
    {
        modelo: 'Palio',
        valor: 13000,
    }]

function calculaCarro(itemAnterior, itemAtual){
    if(itemAnterior.valor){
return itemAnterior.valor + itemAtual.valor
}

return itemAnterior + itemAtual.valor
}

let totalCarro = listaCarros.reduce(calculaCarro)
console.log(totalCarro)