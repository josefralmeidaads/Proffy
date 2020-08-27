import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

const TeacherItem = () => {
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4" alt="Perfil Professor" />
                        <div>
                            <strong>Larissa Toledo</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores teconologias de química avançada.
                        <br /> <br />
                        Apaixonada por explodir coisas em laboratório e por mudar a vida das
                        pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma
                        das minhas explosões.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="ícone whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
        </article>
    );
}

export default TeacherItem;