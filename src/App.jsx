import './App.css'
import React from "react";
import Card from "./components/Layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/listaAlunos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

// eslint-disable-next-line import/no-anonymous-default-export
export default  ( ) =>{
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#07 - Comunicação Indireta" color='Magenta'>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#07 - Comunicação Direta" color='black'>
                    <DiretaPai/>
                </Card>

                <Card titulo="#06 - Renderização Condicional" color='Red'>
                     <ParOuImpar numero={20}></ParOuImpar>
                     <ParOuImpar numero={35}></ParOuImpar>
                     <UsuarioInfo usuario={{nome: 'Emerson'}}/>
                     {/*<UsuarioInfo usuario={{email: 'Emerson'}}/>*/}
                </Card>

                <Card titulo="#05 - Repeticao" color='Orange'>
                  <ListaAlunos></ListaAlunos>  
                </Card>

                <Card titulo="#04 - Componentes com Filhos" color=' #fec8c1'>
                    <Familia sobrenome='Texeira'>
                        <FamiliaMembro nome='Pedro'/>
                        <FamiliaMembro nome='Ana'/>
                        <FamiliaMembro nome='Gustavo'/>
                    </Familia>
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