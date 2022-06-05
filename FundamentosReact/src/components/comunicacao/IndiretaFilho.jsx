import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 20

    const enviarPai = (e) =>{
        props.quandoClicar('Emerson', gerarIdade(), true)
    }

    return (
        
        <div>
            <div>Componente Filho</div>
            <button
                onClick={ enviarPai }
            > 
                Fornecer Informações ao PAI
            </button>            
        </div>
    )
}

