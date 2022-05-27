import './App.css'
import React from "react";
import Card from "./components/Layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Familia from './components/basicos/Familia';

// eslint-disable-next-line import/no-anonymous-default-export
export default  ( ) =>{
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#04 - Componentes com Filhos" color=' #fec8c1'>
                    <Familia sobrenome='Texeira'/>
                </Card>


                <Card titulo="#03 - Fragmento" color='#080'>
                    <Fragmento/>
                </Card>

                <Card titulo="#02 - Compomente com Parâmetro"  color='#005b96'>
                    <ComParametro
                        titulo='Título Exemplo' 
                        subtitulo='Subtítulo Exemplo'
                        numberValue = {10}
                    /> 
                </Card>

                <Card titulo="#01 - Primeiro Componente"  color='#fe8a71'>
                    <Primeiro/> 
                </Card>
            </div>
            
                     
        </div>
    )
}