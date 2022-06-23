import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import '../style.css'

export default function Pessoas() {
const [salva, setSalva] = useState([])
const [name, setName] = useState('')


function salvar(){
  var salvaa = {name : name}
  setSalva([...salva].concat(salvaa))

  localStorage.setItem("nome", (JSON.stringify(salva))) 
  setName('')

} 

    return ( 
            
             <div className="mainPessoas">
              <input type='text'></input>
             <button onClick={salvar}>Salvar</button>
           </div> 
           
    )

}