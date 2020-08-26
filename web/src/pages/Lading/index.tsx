import React from 'react';
import './styles.css'

import logoImg from '../../assets/images/logo.svg'

const Landing = () => {
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua Plataforma de Estudos Online!</h2>
                </div>
            </div>
        </div>
    )
}

export default Landing;