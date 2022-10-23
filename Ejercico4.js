//Tradicional-4
function revisarSable(sable){

    let filtro = sable.filter(function(sable){
        return(sable < 0)
    })
    console.log('la cantidad de sables agregados fueron ' + sable.length+ 'y la cantidad de negativos fueron: ' +filtro.length)
}
arregloSable = [1,2,3,-4,-5]
revisarSable(arregloSable)

//Flecha-4
function revisarSable(sable,secundaria){
    let filtrarSable= sable.filter(function(sable){
        return(sable < 0)
    })
    secundaria(filtrarSable)
}
let arregloSable=[9,8,-5,3,-10,11,-1,17,-58]

revisarSable(arregloSable, function(filtrarSable){
    console.log( ' sables negativos fueron: ' + arregloSable.length + ' ----//----  la cantidad de sables con energia negativa es: ' +filtrarSable.length)
})