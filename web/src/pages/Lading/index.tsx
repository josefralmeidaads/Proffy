import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../services/api'

const Landing = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        
        const loadConnections = async() => {
        const response = await api.get('connections')
            console.log(response)
            const {total} = response.data;
            setTotalConnections(total);
        }
        loadConnections();
    }, [totalConnections]);

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua Plataforma de Estudos Online!</h2>
                </div>
                <img src={landingImg} alt="landingImage" className="hero-image" />
                
                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="study" />
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="give-classes" />
                        Dar aulas
                    </Link>
                </div>
             
              <span className="total-connections">
                  Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
              </span>
            </div>
        </div>
    )
}

export default Landing;