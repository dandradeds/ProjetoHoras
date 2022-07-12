import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/header";
import NavBar from "../../../components/navbar/navBar.js";
import { api } from "../../../Service/api";


export default function Projetos() {
    const [selectItem, setSelectItem] = useState("projetos")
    const [projetos, setprojetos] = useState ([])

    console.log("select", selectItem)

    useEffect(() => {
        async function getProject(){
          let dados = await api.get("/project")
          console.log(dados)
        }getProject()
      },[])


    return (
        <div>
            <Header/>
            <NavBar/> 
            <div className="geral">
                <h1>p</h1>
            </div>
     </div>
    )
}