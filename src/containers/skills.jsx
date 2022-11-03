import React from "react";
import { Technologies } from "../components/techno";
import { SoftSkills } from "../components/softskills";
import style from '../styles/skills.module.css'

export const Skills =()=>{
    return(
        <section id="skills" className={style.skills}>
            <div className={style.contenido_seccion}>
                <h2>Skills</h2>
                <div className={style.fila}>
                   
                        <Technologies/>
                  
                        <SoftSkills/>
                    
                </div>
            </div>
        </section>
    )
}