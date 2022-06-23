import React, { useEffect, useState } from "react";

import Button from '../../components/button'

import {FaCalendarAlt} from 'react-icons/fa'
import {BsGraphUp} from 'react-icons/bs'
import {VscSettingsGear} from 'react-icons/vsc'
import './home.css'


export default function Home() {
  
    return (        
        <div className="container">
            <div className="buttons">
               <Button icon={<FaCalendarAlt size={25} />} label='Calendário' route='/calendar'/>
               <Button icon={<BsGraphUp size={25} />} label='Dashboard' route='/calendar'/>
               <Button icon={<VscSettingsGear size={25} />} label='Configuração' route='/config'/>
            </div>
        </div>
      
    )
}