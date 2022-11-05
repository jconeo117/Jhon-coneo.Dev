import React from "react";
import style from './contact.module.css'
import { useRef } from "react";
import emailjs from '@emailjs/browser'
import api from '../../email.js'

export const Contact =()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(api.SERVICE_ID, api.TEMPLATE_ID, form.current, api.YOUR_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className={style.col}>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="Tú Nombre" name="from_name"/>
                <input type="text" placeholder="Dirección de correo" name="reply_to"/>
                <input type="text" placeholder="Tema" name="asunto"/>
                <textarea name="message" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button className={style.button} type='submit' value='Send'>
                    Enviar Mensaje<i class="fa-solid fa-paper-plane"></i>
                    <span className={style.overlay}></span>
                </button>
            </form>
        </div>
    )
}