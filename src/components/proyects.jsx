import React from "react";
import Proyects from '../proyectos.json'


export const Projects =()=>{
    return (
        <>
        {Proyects && Proyects.map(pro=>{
            return(
                    <div class="proyecto">
                        <img src={pro.image} alt="not found"/>
                        <div class="overlay">
                            <h3>{pro.name}</h3>
                            <p>{pro.descripcion}</p>
                            <div>
                                <p>tecnologias usadas:</p>
                                {pro.tecnologies["back-end"].length?
                                <p>Back end</p>
                                :<></>
                                }
                                {pro.tecnologies["back-end"].map(tech=>{
                                    return(
                                        <ul>
                                            <li>{tech}</li>
                                        </ul>
                                    )
                                })}
                                {pro.tecnologies["front-end"].length?
                                <p>Front end</p>
                                :<></>
                                }
                                {pro.tecnologies["front-end"].map(tech=>{
                                    return(
                                        <ul>
                                            <li>{tech}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                           {pro.deploy !== 'no tiene'?  <a href={pro.deploy}>ver proyecto</a> : <></>}
                           <br/>
                           <a href={pro.repositorie}>ir al repositorio</a>
                        </div>
                    </div>
                )
        })}
        </>
    )
}