import React from "react";
import style from '../styles/navbar.module.css'

export const NavBar =({click})=>{
    return (
        <>
        <nav id="nav" className={click ? `${style.responsive}`: null}>
            <ul>
                <li><a href="#inicio" onclick="seleccionar()">INICIO</a></li>
                <li><a href="#sobremi" onclick="seleccionar()">SOBRE MI</a></li>
                <li><a href="#skills" onclick="seleccionar()">SKILLS</a></li>
                <li><a href="#curriculum" onclick="seleccionar()">CURRICULUM</a></li>
                <li><a href="#portfolio" onclick="seleccionar()">PORTFOLIO</a></li>
                <li><a href="#contacto" onclick="seleccionar()">CONTACTO</a></li>
            </ul>
        </nav>
        </>
    )
}

