//Tradicional-2
function obtNombre(codigo){
    let nombre = codigo.split(':')[0] + codigo.split(':')[1]
    return nombre
}
let resultado2 = obtNombre('22016217 : Andre')
console.log(resultado2)

//Flecha-2
obtNombre = codigo => nombre = codigo.split(':')[1] +codigo.split(':')[0]
let resultado1 = obtNombre('22016217 : Andre')
console.log(resultado1)
