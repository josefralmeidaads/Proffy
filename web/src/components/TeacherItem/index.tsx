import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api';

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps{
    teacher: Teacher 
}

const TeacherItem:React.FC<TeacherItemProps> = (props) => {
    const { teacher } = props;

    const createNewConnection = async() => {
       await api.post('connections', {
           user_id: teacher.id
       });
    }

    return(
        <article key={teacher.id} className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt="Perfil Professor" />
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>
                    <p>
                        {teacher.bio}
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a target="_blanck" onClick={createNewConnection} href={`https://wa.me/5532${teacher.whatsapp}`} type="button">
                            <img src={whatsappIcon} alt="ícone whatsapp"/>
                            Entrar em contato
                        </a>
                    </footer>
        </article>
    );
}

export default TeacherItem;