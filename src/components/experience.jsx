import React from "react";
import style from '../styles/experience.module.css'

export const Experience =()=>{
    return(

        <div className={style.col_derecha}>
        <h3>Experiencia de trabajo</h3>
        <div className={style.item_der}>
          <h4>asistente de enseñanza fullstack</h4>
          <span className={style.casa}>Henry</span><br />
          <span className={style.fecha}>ago 2022 - oct 2022</span>
          <p>
            Ayudante de bootcamp (TA) para alumnos de Desarrollo Full-Stack.<br />
            Tareas principales:<br />
            • Coordinar a un grupo de estudiantes para lograr la integración al grupo de estudio.<br />
            • Orientar a los estudiantes en los primeros pasos de la cursada.<br />
            • Asistir la resolución de ejercicios y promover la colaboración grupal (Pair Programming).<br />
            • Proponer ideas para la mejora de los procesos del Bootcamp<br />
          </p>
          <div className={style.conectord}>
            <div className={style.circulod} />
          </div>
        </div>
      </div>
    )
}