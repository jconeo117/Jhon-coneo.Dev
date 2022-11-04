import React from "react";
import { Education } from "../../components/curriculum/education";
import { Experience } from "../../components/curriculum/experience";
import style from './curriculum.module.css'

export const Expeducation =()=>{
    return(
        <section id="curriculum" className={style.curriculum}>
            <div className={style.contenido_seccion}>
                <h2>Curriculum</h2>
                <div className={style.fila}>
                    <Education/>
                    <Experience/>
                </div>
            </div>
        </section>
    )
}