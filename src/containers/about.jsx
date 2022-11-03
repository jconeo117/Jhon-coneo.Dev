import React from "react";
import { Hobbies } from "../components/hobbies";
import { Personal } from "../components/infoPersonal";
import style from '../styles/about.module.css'


export const About =()=>{
    return(
        <section id="sobremi" className={style.sobremi}>
            <div className={style.contenido_seccion}>
                <h2>Sobre Mí</h2>
                <p>
                    <span>Hola, soy Jhon Coneo Hernandez.</span> Desarrollador web fullstack jr. ¡Con ánimo y muchas ganas de seguir aprendiendo! Soy estudiante de ingeniería informática y egresado del bootcamp de soy henry
                </p>
                <div className={style.fila}>  
                    <Personal/>
            
                    <Hobbies/>
                </div>
                <button>
                    Descargar CV <i class="fa-solid fa-download"></i>
                    <span className={style.overlay}></span>
                </button>
            </div>
        </section>
    )
}