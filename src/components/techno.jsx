import React from "react";
import style from '../styles/tech.module.css'

export const Technologies =()=>{
    return(
      <>
          <h2 className={style.h2}>Technical Skills</h2>
         
        <div className={style.col}>
          <div className={style.skill}>
            <i className="devicon-html5-plain-wordmark colored" />
            <span>HTML5</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-css3-plain-wordmark colored" />
            <span>CSS3</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-javascript-plain colored" />                      
            <span>Javascript</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-typescript-plain colored" />
            <span>Typescript</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-react-original-wordmark colored" />
            <span>React.js</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-redux-original colored" />
            <span>Redux.js</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-nodejs-plain-wordmark colored" />
            <span>Node.js</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-express-original-wordmark colored" />
            <span>Express</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-postgresql-plain-wordmark colored" />
            <span>Postgresql</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-sequelize-plain-wordmark colored" />
            <span>Sequelize</span>
          </div>
          <div className={style.skill}>
            <i className="devicon-mongodb-plain-wordmark colored" />
            <span>MongoDB</span>
          </div>
        </div>
      
      </>
    )
}