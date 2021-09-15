import React from 'react';

function Resultado( {total, plazo, cantidad}){
    return(
        <div className="u-full-width resultado">
             <h2> Resumen </h2>
             <p> La cantidad solicitada es : $ {cantidad} </p>
             <p> A pagar en  :  {plazo} meses </p>
             <p> Su pago mensual es de : $ {(total / plazo).toFixed(2)} </p>
             <p> El total a pagar es : $ {total} </p>
        </div>


    );
}

export default Resultado;