//Tradicional-6
function pnc(nombre,planeta,edad,estatura,secundaria){

    let estudiante={
        nombre: nombre,
        planeta: planeta,
        edad: edad,
        estatura: estatura,
        datosinf: function(){
            return `\n` + nombre+' ' + `\n` +planeta+'\n'+ edad+ ''+`\n`+estatura +''+`\n`
        }
    }
    secundaria(estudiante)
}

pnc('andrea','marte',18,1.55, function(parametro){
    if(parametro.edad >15){
        console.log(parametro.datosinf()+ "manejo de fuerza")
    }else{
        console.log(parametro.datosinf()+'Manejo de sable')
    }
})