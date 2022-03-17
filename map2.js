let listaCompras = [
    {nome: 'detergente', categoria: 'limpeza', preco: 1.28},
    {nome: 'pao', categproa: 'alimentos', preco: 5.25},
    {nome: 'coca-cola', categoria: 'bebida', preco: 3},
    {nome: 'queijo', categoria: 'alimento', preco: 4},
    {nome: 'vassoura', categproa: 'limpeza', preco: 15},
    {nome: 'pano de chao', categoria: 'utensilio', preco: 3},
    {nome: 'maca', categoria: 'alimento', preco: 2},
]

function calculaCarrinho(itemAnterior, itemAtual){
    if(itemAnterior.preco){
return itemAnterior.preco + itemAtual.preco
}

return itemAnterior + itemAtual.preco
}

let totalCarrinho = listaCompras.reduce(calculaCarrinho)
console.log(totalCarrinho)


let totalCompra = 0
listaCompras.map((item) =>{
//totalCompra = totalCompra + item.preco;
totalCompra += item.preco
})

console.log(totalCompra)