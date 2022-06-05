import React from 'react'
import './Card.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const style ={
        backgroundColor: props.color || '#F00', // Se não houver parãmetro ele assume o valor padrão
        borderColor: props.color     || '#F00'
    } 

    return(
        <div className='Card' style={style}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )   
}