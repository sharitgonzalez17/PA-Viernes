//Tradicional-5
function calculaSalario(licencia){
    let salario = 4500000
    let comision = 1200000
    let impuesto = 0.95

    return ((salario+(licencia * comision))* impuesto)
}
console.log('el salario es: '+ calculaSalario(1))

//Flecha-5
calcularSalario3 = licencia => { salario = 4500000 , comision = 1200000, impuestos = 0.95   
    return ( (salario+(licencia * comision))*impuesto)
}
console.log(calcularSalario1(1))