import React, { useState } from "react";
import { NavBar } from "../components/navbar";
import style from '../styles/header.module.css'
import { useRef } from "react";

export const Header =()=>{
    const [click, setClick] = useState(false)

	const showNavbar = () => {
		setClick(!click)
	};
    return (
        <div className={style.contenedor_header}>
        <header>
            <div className={style.logo}>
                <a href="#">Jhon.DEV</a>
            </div>
            <NavBar click={click}/>
            <div className={style.nav_responsive} onClick={showNavbar}>
                <i className="fa-solid fa-bars" /> 
            </div>
        </header>
      </div>
    )
}