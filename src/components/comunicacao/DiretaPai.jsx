import React from "react";
import DiretaFilho from "./DiretaFilho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DiretaFilho nome="Tomás" idade={20} presente={true}/>
            <DiretaFilho nome="Elma" idade={23} presente={true}/>
        </div>
    )
}

