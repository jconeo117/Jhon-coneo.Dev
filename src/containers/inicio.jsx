import React from "react";
import { Social } from "../components/social";
import style from '../styles/inicio.module.css'


export const Inicio =()=>{
    return(
        <section id="inicio" className={style.inicio}>
            <div className={style.contenido_banner}>
                <div className="contenedor-img">
                    <img src="https://avatars.githubusercontent.com/u/87352389?v=4" alt="not found" />
                </div>
            <h1>Jhon Coneo</h1>
            <h2>Desarrollador web fullstack</h2>
            <Social/>
            </div>
        </section>
    )
}