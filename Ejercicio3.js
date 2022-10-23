//Tradicional-3
function monTemperatura(grados){
    let temperaturaPro
    let sumatemperaturaPorDia = 0
    let cantidadTemperatura = 0

    grados.forEach(function(grado){
        sumatemperaturaPorDia=(sumatemperaturaPorDia+grado)
        cantidadTemperatura=cantidadTemperatura +1
        temperaturaPro = sumatemperaturaPorDia/cantidadTemperatura
    })    
    console.log('el numero de '+cantidadTemperatura +'dias agregados, La temperaturaPro es: '+ temperaturaPro.toFixed() + 'grados')
}

let arreglosGrados=[20,20,20,20,20,20, 10]
monTemperatura(arreglosGrados)

//Flecha-3
let monTemperatura = grados =>{
    let temperaturaPro
    let sumatemperaturaPorDia = 0
    let cantidadTemperatura = 0

    grados.forEach(function(grado){
        sumatemperaturaPorDia=(sumatemperaturaPorDia+grado)
        cantidadTemperatura = cantidadTemperatura+1
        temperaturaPro = sumatemperaturaPorDia/cantidadTemperatura
    })
    console.log('el numero de ' +cantidadTemperatura + 'dias agregados, la temperatura promedio es: ' + temperaturaPro.toFixed() + 'grados')
}

let arreglosGrados2=[20,20,20,20,20,20,10]
monTemperatura(arreglosGrados)