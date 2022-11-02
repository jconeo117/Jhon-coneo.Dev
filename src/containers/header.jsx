import React from "react";
import { NavBar } from "../components/navbar";


export const Header =()=>{
    return (
        <>
        <div class="logo">
            <a href="#">Jhon.DEV</a>
        </div>

            <NavBar/>
            
        <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                <i class="fa-solid fa-bars"></i> 
        </div>
        </>
    )
}