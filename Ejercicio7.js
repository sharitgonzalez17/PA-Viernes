//Callback-7
function filtrarPlanos (plano, arrancarNava){
    let filtro = plano.filter(function(plano){

        return(plano >= 1 && plano <=10)
    })
    arrancarNave(filtro)
}

let plano = [1,2,200,300,400,500]
filtrarPlanos(plano,function(filtro){
    let cuenta = flitro.length
    if(cuenta > 0){
        console.log("Nave Arrancando")
    }
    else{
        ("Detectando planos")
    }
})