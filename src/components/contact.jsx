import React from "react";

export const Contact =()=>{
    return(
        <div class="col">
                <input type="text" placeholder="Tú Nombre"/>
                <input type="text" placeholder="Número telefónico"/>
                <input type="text" placeholder="Dirección de correo"/>
                <input type="text" placeholder="Tema"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                <button>
                    Enviar Mensaje<i class="fa-solid fa-paper-plane"></i>
                    <span class="overlay"></span>
                </button>
        </div>
    )
}