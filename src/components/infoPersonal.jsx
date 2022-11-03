import React from "react";
import style from '../styles/hobies.module.css'

export const Personal =()=>{
    return (
        <div className={style.col}>
        <h3>Datos Personales</h3>
        <ul>
          <li>
            <strong>Nacionalidad:{' '}</strong>
            Colombiano
          </li>
          <li>
            <strong>Email:{' '}</strong>
            jconeo117@gmail.com
          </li>
          <li>
            <strong>Website:{' '}</strong>
            www.example.com
          </li>
          <li>
            <strong>Cargo:{' '}</strong>
            <span>FREELANCE</span>
          </li>
        </ul>
      </div>

    )
}