var killometros=100000;
function viaje(){
    if(killometros<1000){
        alert('pie')
    }else if((killometros>1000)&&(killometros<10000)){
        alert('bicicleta')
    }else if((killometros>10000)&&(killometros<30000)){
        alert('colectivo')
    }else if((killometros>3000)&&(killometros<100000)){
        alert('auto')
    }else{
        alert('avion')
    }
}
viaje()

const numeros=[1,23,500,10,200,43,800,9000]
function numero(){
    var numeroMayor=0;
    let x=0;
    while(x<8){
        if(numeros[x]>numeroMayor){
            numeroMayor=numeros[x]
        }
        x++
    }
    document.write('<h1>',numeroMayor,'</h1>')

}
numero()