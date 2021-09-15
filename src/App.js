import React , { Fragment, useState } from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/formulario';
import Mensaje from './componentes/mensaje';
import Resultado from './componentes/resultado';
import Spiner from './componentes/Spiner';
function App() {
   // definicion del state
    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);


    let componente;
    if(cargando){
       componente = <Spiner />
    } else if(total === 0){
        componente = <Mensaje />
    }else{
        componente = <Resultado 
                          total = {total}
                          plazo= {plazo}
                          cantidad = {cantidad}
                      />
    }
    return (
    <Fragment>
    
      <Header
        titulo='Cotizador de Prestamos'
      />
      <div className="container">
              <Formulario
                cantidad = {cantidad}
                guardarCantidad = {guardarCantidad}
                plazo= {plazo}
                guardarPlazo ={guardarPlazo}
                total = {total}
                guardarTotal = {guardarTotal}
                guardarCargando = {guardarCargando}
              />
              <div className="mensajes">
                  {componente}
             </div>
      </div>
     
     
     
                         
     
   
    </Fragment>
  );
}

export default App;
