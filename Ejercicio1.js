//Funciones tradicionales1

function calcularDist (x1,x2,y1,y2){
    return(Math.sqrt(Math.pow(x2-x1,2) +Math.pow(y2-y1,2)))
}
let distancia = calcularDist(1,1,2,0)
console.log('la distancia calculada fue: '+distancia)

//Funcion Flecha 1
const calcularDist =(x1,x2,y1,y2)=>Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))

let distanciaFle = calcularDist(1,1,2,0)
console.log('La distancia fue: '+distanciaFle)