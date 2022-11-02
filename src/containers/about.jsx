import React from "react";
import { Hobbies } from "../components/hobbies";
import { Personal } from "../components/infoPersonal";



export const About =()=>{
    return(
        <>
            <h2>Sobre Mí</h2>
            <p>
                <span>Hola, soy Jhon Coneo Hernandez.</span> Desarrollador web fullstack jr. ¡Con ánimo y muchas ganas de seguir aprendiendo! Soy estudiante de ingeniería informática y egresado del bootcamp de soy henry</p>
            <div>
                <Personal/>
            </div>
            <div>
                <Hobbies/>
            </div>
            <button>
                Descargar CV <i class="fa-solid fa-download"></i>
                <span class="overlay"></span>
            </button>
        </>
    )
}