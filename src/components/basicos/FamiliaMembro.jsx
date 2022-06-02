import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const nome = props.nome
    const sobrenome = props.sobrenome || 'Not Found'
    return  <div>{nome} <strong>{sobrenome}</strong></div>

}