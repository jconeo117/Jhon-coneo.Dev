import React from "react";


export const NavBar =()=>{
    return (
        <>
        <nav id="nav">
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

