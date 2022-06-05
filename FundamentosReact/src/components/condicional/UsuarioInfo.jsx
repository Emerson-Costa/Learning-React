import React from "react";
import If, {Else} from "./If";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            {/*<If test={usuario && usuario.nome}> 
                Seja bem vindo <strong>{usuario.nome}</strong>!
            </If>    

            <If test={!usuario || !usuario.nome}> 
                <strong>Como você se chama ?</strong>
            </If> */}   

            <If test={usuario && usuario.nome}> 
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else> 
                    <strong>Como você se chama ?</strong>
                </Else>  
            </If>      
        </div>
    )
}
