import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <label htmlFor="passoImput">Passo: </label>
            <input 
                id="passoImput"
                value={props.passo} 
                onChange={ e => props.setPasso(+e.target.value)} 
                type="number" />
        </div>
    )
}