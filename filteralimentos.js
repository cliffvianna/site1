let listaCompras = [
    {nome: 'detergente', categoria: 'limpeza'},
    {nome: 'pao', categproa: 'alimentos'},
    {nome: 'coca-cola', categoria: 'bebida'},
    {nome: 'queijo', categoria: 'alimento'},
    {nome: 'vassoura', categproa: 'limpeza'},
    {nome: 'pano de chao', categoria: 'utensilio'},
    {nome: 'maca', categoria: 'alimento'},

]

function filtraListaCompras(item){
return item.categoria == 'alimento'
}

let listaAlimentos = listaCompras.filter(filtraListaCompras)
console.log(listaCompras)
console.log(listaAlimentos)