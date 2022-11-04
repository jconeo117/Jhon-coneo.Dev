import React from "react";
import style from './contact.module.css'

export const Contact =()=>{
    return(
        <div className={style.col}>
                <input type="text" placeholder="Tú Nombre"/>
                <input type="text" placeholder="Número telefónico"/>
                <input type="text" placeholder="Dirección de correo"/>
                <input type="text" placeholder="Tema"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button className={style.button}>
                    Enviar Mensaje<i class="fa-solid fa-paper-plane"></i>
                    <span className={style.overlay}></span>
                </button>
        </div>
    )
}