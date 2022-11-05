import React from "react";
import { Hobbies } from "../../components/about/hobbies";
import { Personal } from "../../components/about/infoPersonal";
import style from './about.module.css'


export const About =()=>{

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Resume-Jhon-Coneo-Hernandez.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Curriculum.pdf';
                alink.click();
            })
        })
    }

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
                <button onClick={onButtonClick}>
                    Descargar CV <i class="fa-solid fa-download"></i>
                    <span className={style.overlay}></span>
                </button>
            </div>
        </section>
    )
}