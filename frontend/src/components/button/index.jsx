import React from "react";
import { Link } from "react-router-dom";
import './button.css'

export default function ButtonHome(props) {
    return (        

        <div className="divButtonHome" style={props.active == "no" ?{filter:' opacity(0.5) grayscale(1)', pointerEvents:'none'}: {}}>
            <Link exact to={`${props.route}`}>
                <button className="buttonHome">{props.icon}</button>
            </Link>
            <label>{props.label}</label>
        </div>
    )
}