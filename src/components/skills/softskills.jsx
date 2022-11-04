import React from "react";
import style from './skill.module.css'

export const SoftSkills =()=>{
    return(
        <>
            <h2 className={style.h2}>Soft Skills</h2>
            <div className={style.col}>
            <div className={style.skill}>
           
            <span>Cooperación</span>
          </div>
          <div className={style.skill}>
           
            <span>Comunicación</span>
          </div>
          <div className={style.skill}>
                        
            <span>Sociabilidad</span>
          </div>
          <div className={style.skill}>
           
            <span>Hablar en público</span>
          </div>
          <div className={style.skill}>
         
            <span>Escucha activa</span>
          </div>
          <div className={style.skill}>
          
            <span>Liderazgo de equipos</span>
          </div>
          <div className={style.skill}>
        
            <span>Resolución de problemas</span>
          </div>
          <div className={style.skill}>
            
            <span>Desarrollo personal</span>
          </div>
          <div className={style.skill}>
           
            <span>Desarrollo personal</span>
          </div>
        </div>
        </>
    )
}