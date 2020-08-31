import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import './styles.css';

const TeacherForm = () => {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: ''},
    ]);

    const addNewScheduleItem = () => {
       setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
    }

    return(
        <div id="page-teacher-form" className="container">
                <PageHeader title="Que incrível que você quer dar aulas" 
                    description="O primeiro passo é preencher esse formulário de inscrição"
                />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"/>

                    <Input name="Avatar" label="Avatar"/>

                    <Input name="whatsapp" label="Whatsapp"/>

                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>Sobre a Aula</legend>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Química', label: 'Química'},
                            {value: 'Educação Física', label: 'Educação Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'História', label: 'História'},
                            {value: 'Religião', label: 'Religião'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Filosofia', label: 'Filosofia'},
                            {value: 'Sociologia', label: 'Sociologia'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Física', label: 'Física'},
                        ]}
                    />

                    <Input name="cost" label="Custo da sua hora por aula"/>
                    
                </fieldset>

                <fieldset>
                    <legend>Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo Horário
                        </button>
                    </legend>
                     
                     {scheduleItems.map( scheduleItem => {
                         return(
                                    <div key={scheduleItem.week_day} className="schedule-item">
                                        <Select className="select"
                                            name="week_day" 
                                            label="Dia da Semana"
                                            options={[
                                                {value: '0', label: 'Segunda-Feira'},
                                                {value: '1', label: 'Terça-Feira'},
                                                {value: '2', label: 'Quarta-Feira'},
                                                {value: '3', label: 'Quinta-Feira'},
                                                {value: '5', label: 'Sexta-Feira'},
                                                {value: '6', label: 'Sábado'},
                                            ]}
                                        />
                
                                        <Input name="from" label="Das" type="time"></Input>
                                        <Input name="to" label="Até" type="time"></Input>
                                    </div>
                         );
                     })}
                    
                </fieldset>
                    
                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso"/>
                        Importante! <br />
                        Preencha todos os dados.
                    </p>
                        <button type="button">Salvar Cadastro</button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;