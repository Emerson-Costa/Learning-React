import React from "react";
import FamiliaMembro from "./FamiliaMembro";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    const sobrenome = props.sobrenome;
    console.log(sobrenome)
    return (
        <div>
            <FamiliaMembro nome='Pedro' sobrenome='Silva'/>
            <FamiliaMembro nome='Ana' sobrenome='Carvalho'/>
            <FamiliaMembro nome='Gustavo' sobrenome='Texeira' />
        </div>
    )
}