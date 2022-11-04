import React from "react";
import Proyects from '../../proyectos.json'
import style from './projects.module.css'

export const Projects =()=>{
    return (
        <div className={style.galeria}>
        {Proyects && Proyects.map(pro=>{
            return(
                    <div className={style.proyecto}>
                        <img src={pro.image} alt="not found"/>
                        <div className={style.overlay}>
                            <h3>{pro.name}</h3>
                            <p>{pro.descripcion}</p>
                            <div>
                                <p> <strong>tecnologias usadas:</strong></p>
                                {pro.tecnologies["back-end"] || pro.tecnologies["front-end"]?
                                <p>{`${pro.tecnologies["back-end"].concat(pro.tecnologies["front-end"]).join(', ')} `}</p>
                                :<></>
                                }
                            </div>
                           {pro.deploy !== 'no tiene'?  <a href={pro.deploy}>ver proyecto</a> : <></>}<br/>
                           
                           <a href={pro.repositorie}>ir al repositorio</a>
                        </div>
                    </div>
                )
        })}
        </div>
    )
}