import React from "react";
import style from './footer.module.css'

export const Footer =()=>{
    return(
        <footer>
        <a href="#inicio" className={style.arriba}>
            <i class="fa-solid fa-angles-up"></i>
        </a>
        <div className={style.redes}>
            <a href="https://github.com/jconeo117"><i className="fa-brands fa-github" /></a>
            <a href="https://www.linkedin.com/in/jhon-coneo-hernandez-9a930b174/"><i className="fa-brands fa-linkedin-in" /></a>
        </div>
    </footer>
    )
}