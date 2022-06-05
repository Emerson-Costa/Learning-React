import React, {useState} from "react";
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    
    const [nome,setNome]  = useState('?')
    const [idade, setIdade] = useState(0)
    const [presente, setPresente] = useState(false)

    function fornecerInformacoes(nomeParam, idadeParam, presenteParam){
       setNome(nomeParam)
       setIdade(idadeParam)
       setPresente(presenteParam)
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

