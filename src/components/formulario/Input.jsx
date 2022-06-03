import React , {useState} from "react";
import './Input.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
        console.log(e.target.value)
    }

    return (
        
        <div className="Input">
             <h3>{valor}</h3>
             <div style={{
                 display: 'flex',
                 flexDirection: 'column'
             }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/> {/* componente sem evento */}
                <input value={undefined}/> {/* componente não controlado */}
             </div>           
        </div>
    )
}

