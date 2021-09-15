export function calcularTotal(cantidad, plazo){
// 0 - 1000 = 25 %
// 1001 - 5000 = 20 %
// 5001 - 10000 =  15 %
// +10000 = 10 %
//

let cantidadTotal ;
if(cantidad <= 1000){
    cantidadTotal = cantidad * .25;
} else if( cantidad > 1000 && cantidad >= 5000){
    cantidadTotal = cantidad * .20;
} else if (cantidad > 5000 && cantidad <= 10000){
    cantidadTotal = cantidad * .15;
}else{
    cantidadTotal = cantidad * .10;
}

// calcular el plazo

//3 = 5%
//6 = 10 %
//12 = 15 % 
//24 = 20 %

let totalPlazo = 0;


switch(plazo){
    case 3: 
        totalPlazo = cantidad * .05;
        break;
    case 6: 
        totalPlazo  = cantidad * .10;
        break;
    case 12: 
        totalPlazo  = cantidad * .15;
        break;
    case 24: 
        totalPlazo  = cantidad * .20;
        break;
}


return totalPlazo + cantidadTotal + cantidad;

}