import React from "react";
import style from '../styles/hobies.module.css'

export const Hobbies =()=>{
    return(
        <div className={style.col}>
        <h3>Hobbies</h3>
        <div className={style.contenedor_intereses}>
          <div className={style.interes}>
            <i className="fa-solid fa-gamepad" />
            <span>JUEGOS</span>
          </div>
          <div className={style.interes}>
            <i className="fa-solid fa-headphones" />
            <span>MUSICA</span>
          </div>
          <div className={style.interes}>
            <i className="fa-solid fa-plane" />
            <span>VIAJAR</span>
          </div>
          <div className={style.interes}>
            <i className="fa-solid fa-person-hiking" />
            <span>DEPORTE</span>
          </div>
          <div className={style.interes}>
            <i className="fa-solid fa-book" />
            <span>MANGA</span>
          </div>
          <div className={style.interes}>
            <i className="fa-solid fa-car" />
            <span>AUTOS</span>
          </div>
          <div className={style.interes}>
            <i className="fa-solid fa-computer" />
            <span>WEB DEV</span>
          </div>
        </div>
      </div>
    )
}