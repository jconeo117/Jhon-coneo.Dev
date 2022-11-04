import React from "react";
import { Technologies } from "../../components/skills/techno";
import { SoftSkills } from "../../components/skills/softskills";
import style from './skills.module.css'

export const Skills =()=>{
    return(
        <section id="skills" className={style.skills}>
            <div className={style.contenido_seccion}>
                <h2>Skills</h2>
                <div className={style.fila}>
                    <h2 className={style.h2}>Technical Skills</h2>
                    <h2 className={style.h2}>Soft Skills</h2>
                </div>
                <div className={style.fila}>
                   
                        <Technologies/>
                  
                        <SoftSkills/>
                    
                </div>
            </div>
        </section>
    )
}