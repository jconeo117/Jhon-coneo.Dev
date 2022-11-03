import React from "react";
import style from '../styles/tech.module.css'


export const SoftSkills =()=>{
    return(
        <>
            <h2 className={style.h2}>Soft Skills</h2>
        <div className={style.col}>
            <ul>
                <li className="skill">
                    <span>Cooperación</span>
                </li>
                <li className="skill">
                    <span>Comunicación</span>
                </li>
                <li className="skill">
                    <span>Sociabilidad</span>
                </li>
                <li className="skill">
                    <span>Hablar en público</span>
                </li>
                <li className="skill">
                    <span>Escucha activa</span>
                </li>
                <li className="skill">
                    <span>Liderazgo de equipos</span>
                </li>
                <li className="skill">
                    <span>Resolución de problemas</span>
                </li>
                <li className="skill">
                    <span>Trabajo en equipo</span>
                </li> 
                <li className="skill">
                    <span>Desarrollo personal</span>
                </li>
            </ul>
        </div>
        </>
    )
}