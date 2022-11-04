import React from "react";
import { Social } from "../../components/inicio/social";
import style from './inicio.module.css'

export const Inicio =()=>{
    return(
        <section id="inicio" className={style.inicio}>
            <div className={style.contenido_banner}>
                <div className="contenedor_img">
                    <img src="https://avatars.githubusercontent.com/u/87352389?v=4" alt="not found" />
                </div>
            <h1>Jhon Coneo</h1>
            <h2>Desarrollador web fullstack</h2>
            <Social/>
            </div>
        </section>
    )
}