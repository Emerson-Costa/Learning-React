import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <span>Nome: {props.nome} </span>
            <span>Idade: {props.idade} </span>
            <span>Presente: {props.presente ? 'Verdadeiro' : 'Falso'}</span><br/><br/>
        </div>
    )
}
