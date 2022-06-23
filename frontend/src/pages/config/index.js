import React, { useEffect, useState } from "react";
import {VscSettingsGear} from 'react-icons/vsc'
import { Link } from "react-router-dom";
import Pessoas from "./pessoas/index"
import Projeto from "./projetos/index"
import { ImHome } from "react-icons/im";
import { BiHeadphone } from "react-icons/bi";
import { BiFolder } from "react-icons/bi"


export default function Config() {
    const [selectItem, setSelectItem] = useState("Reunioes")
    console.log("select", selectItem)


    return (
        <div>
        <header className="main_content">
        <Link to='/'><ImHome size={40} color="#fff" /></Link>
        </header>
        <div className="main">
            
            <nav className="sidebar">
                <ul>
                    <li onClick={()=> setSelectItem('reunioes')}><BiHeadphone size={25} color="#000" />Reuniões</li>
                    <li onClick={()=> setSelectItem('projetos')}><BiFolder size={25} color="#000" />Projetos</li>
                </ul>
            </nav>
        
        {selectItem == 'reunioes'?(
            <Pessoas/>
        ):null}
            
     </div>
     </div>
    )
}