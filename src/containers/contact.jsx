import React from "react";
import {Contact} from '../components/contact'
import style from '../styles/contact.module.css'


export const Contac =()=>{
    return(
        <section id="contacto" className={style.contacto}>
        <div className={style.contenido_seccion}>
            <h2>CONTACTO</h2>
            <div className={style.fila}>
                <Contact/>
            </div>
        </div>
    </section>
    )
}