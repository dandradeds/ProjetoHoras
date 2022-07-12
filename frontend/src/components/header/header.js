import React from 'react';
import '../header/style.css'
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";


function Header() {
    return ( 
        <header className='Cabecalho'>
        <Link to="/">
            <ImHome size={35}/>
        </Link>
    </header>
     );
}

export default Header ;