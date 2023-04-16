import React from "react"
import "../css/header.css"
import aflogo from '../media/aflogo.png'
import samfox from '../media/samfox.jpeg'

function Header(){
    return(
        <header className="header">
            <div className="header-container">
                <div className="header-left-container">
                    <div className="logo-container">
                        <img src={aflogo}></img>
                        <img src={samfox}></img>
                    </div>
                    <h5>89th Communications Squadron MDT Toolkit</h5>
                </div>
                <select>
                    <option>Network Visualizer</option>
                </select>
            </div>
        </header>
    )
}

export default Header