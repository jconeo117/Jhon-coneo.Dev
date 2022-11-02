import React from "react";
import { NavBar } from "../components/navbar";


export const Header =()=>{
    return (
        <div className="contenedor-header">
        <header>
            <div className="logo">
                <a href="#">Jhon.DEV</a>
            </div>
            <NavBar/>
            <div className="nav-responsive" onclick="mostrarOcultarMenu()">
                <i className="fa-solid fa-bars" /> 
            </div>
        </header>
      </div>
    )
}