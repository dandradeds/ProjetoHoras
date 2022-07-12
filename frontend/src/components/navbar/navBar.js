import React from 'react' 
import { Link } from "react-router-dom";
import '../navbar/style.css'



function NavBar() {
    return (  
        <nav className="sidebar">
        <ul>
            <Link to="/pessoas">
            <li> 
                Reunião
            </li>
            </Link>
            <Link to="/projetos">
            <li> 
                Projeto
            </li>
            </Link>
        </ul>
    </nav>
    );
}

export default NavBar;