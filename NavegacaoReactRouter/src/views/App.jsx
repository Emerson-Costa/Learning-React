import React from "react";
import '../../src/views/App.css'

import { BrowserRouter } from "react-router-dom";

import Menu from '../../src/componets/layout/Menu'
import Content from "../componets/layout/Content";

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Content />
        </BrowserRouter>        
    </div>
)

export default App