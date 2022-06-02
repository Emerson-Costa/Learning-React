import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const enviarPai = (e) =>{
        props.quandoClicar('Emerson', 36, true)
    }

    return (
        
        <div>
            <div>Componente Filho</div>
            <button
                onClick={ enviarPai }
            > 
                Fornecer Informações
            </button>            
        </div>
    )
}

