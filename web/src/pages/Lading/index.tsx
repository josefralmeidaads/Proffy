import React from 'react';
import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

const Landing = () => {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua Plataforma de Estudos Online!</h2>
                </div>
                <img src={landingImg} alt="landingImage" className="hero-image" />
                
                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="study" />
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="give-classes" />
                        Dar aulas
                    </a>
                </div>
             
              <span className="total-connections">
                  Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
              </span>
            </div>
        </div>
    )
}

export default Landing;