import React from "react"

export default function ComParametro (props){
    const status = props.numberValue > 6 ? 'O valor atribuído é maior que 6' : 'O valor atribuído é menor que 6'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h4>O valor atribuído é: {props.numberValue}</h4>
            <h4>{status}</h4>
        </div>
    )
}