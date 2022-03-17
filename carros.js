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

    function filterListaCarros(item){
        return item.valor > 15000
    }
let lista = listaCarros.filter(filterListaCarros)

console.log(listaCarros)
console.log(lista)
