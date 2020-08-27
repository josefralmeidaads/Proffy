import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

interface PageHeaderProps{ // isso e o mesmo que colocar props no parâmetro
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const { title } = props;

    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Flecha Left" />
                    </Link>
                        <img src={logoImg} alt="Proffy" />
                </div>

            <div className="header-content">
                <strong>{title}</strong>
            </div>
        </header>
    )
}

export default PageHeader;