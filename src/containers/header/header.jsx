import React, { useState } from "react";
//import { NavBar } from "../../components/NavBar/navbar";
import style from './header.module.css'

export const Header =()=>{
    const [click, setClick] = useState(false)

	const showNavbar = () => {
		setClick(!click)
	};

	const select = () => {
		setClick(false)
	};

    return (
        <div className={style.contenedor_header}>
        <header>
            <div className={style.logo}>
                <a href="#">Jhon.DEV</a>
            </div>
            <nav id="nav" className={click ? `${style.responsive}`: null}>
            <ul>
                <li><a href="#inicio" onClick={select}>INICIO</a></li>
                <li><a href="#sobremi" onClick={select}>SOBRE MI</a></li>
                <li><a href="#skills" onClick={select}>SKILLS</a></li>
                <li><a href="#curriculum" onClick={select}>CURRICULUM</a></li>
                <li><a href="#portfolio" onClick={select}>PORTFOLIO</a></li>
                <li><a href="#contacto" onClick={select}>CONTACTO</a></li>
            </ul>
            </nav>
            <div className={style.nav_responsive} onClick={showNavbar}>
                <i className="fa-solid fa-bars" /> 
            </div>
        </header>
      </div>
    )
}