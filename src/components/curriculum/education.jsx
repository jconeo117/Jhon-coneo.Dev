import React from "react";
import style from './education.module.css'


export const Education =()=>{
    return (
      <div className={style.col_izquierda}>
      <h3>Educación</h3>
      <div className={style.item_izq}>
        <h4>Ingeniería informática</h4>
        <span className={style.casa}>Universidad nacional del litoral</span><br />
        <span className={style.fecha}>feb 2020 - presente</span>
        <div className={style.conectori}>
          <div className={style.circuloi} />
        </div>
      </div>
      <div className={style.item_izq}>
        <h4>Desarrollo web fullstack</h4>
        <span className={style.casa}>Henry</span><br />
        <span className={style.fecha}>jul 2022 - oct 2022</span>
        <div className={style.conectori}>
          <div className={style.circuloi} />
        </div>
      </div>
    </div>
    )
}