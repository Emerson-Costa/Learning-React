import React from "react";
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    let nome = '?'
    let idade = 0
    let presente = false

    function fornecerInformacoes(nomeParam, idadeParam, presenteParam){
        nome = nomeParam
        idade = idadeParam
        presente = presenteParam
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{presente ? 'Verdadeiro' : 'Falso'} </span>
            </div>
            <div>Componete Pai</div> <br/><br/>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

