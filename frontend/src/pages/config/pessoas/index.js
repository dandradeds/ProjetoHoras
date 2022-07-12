import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/header/header";
import NavBar from "../../../components/navbar/navBar.js";
import '../pessoas/style.css'
import { api } from "../../../Service/api";

export default function Pessoas() {
const [salva, setSalva] = useState([])
const [names, setNames] = useState("")
const [pessoas, setPessoas] = useState([])

useEffect(() => {
  async function getPessoas(){
    let dados = await api.get("/people")
    console.log(dados)
  }getPessoas()
},[])
console.log(pessoas)

function handleSubmit(e){
  e.preventDefault()


  
}




    return  ( 
           <div>
              <Header/>
              <NavBar/> 
              <div className="geral">
                <input type="text" value={names} onChange={(e)=>setNames(e.target.value)}></input>
                <button onClick={handleSubmit}>+</button>
                <div className="table">
                  <table>
                    <tbody>
                    {salva.map(e => (
                      <tr key={e.id}>
                        <td>
                        {e.name}
                        <td>
                        </td>  
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
           </div>
    )
    
}