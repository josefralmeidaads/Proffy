import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import { useHistory } from 'react-router-dom';
import { Toast, ToastContainer, toast } from 'react-toastify'

import './styles.css';
import api from '../../services/api';

toast.configure();

const TeacherForm = () => {

    

    //---------------Estados de Inputs---------------------------------------------------------------------------------
      const [name, setName] = useState('');
      const [avatar, setAvatar] = useState('');
      const [whatsapp, setWhatsapp] = useState('');
      const [bio, setBio] = useState('');
      const [subject, setSubject] = useState('');
      const [cost, setCost] = useState('');
      const [scheduleItems, setScheduleItems] = useState([
            { week_day: 0, from: '', to: ''},
      ]);
      const history = useHistory();
    //-------------------------------------------------------------------------------------------------------------------
    const addNewScheduleItem = () => {// adicionando um novo formulário de horários pelo botão +Novo Horário
       setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
    }
    //-------------------------------------------------------------------------------------------------------------------

    const handleCreateClass = async(e:FormEvent) => {// cadastro de professores e horários que os proffs irá atender
        e.preventDefault();// prevenindo comportamento default
        
        try{
            await api.post('classes', {
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost: Number(cost),
                schedule: scheduleItems
            });
            alert('Cadastro Realizado com Sucesso!')
            history.push('/');
        }catch(error){
            alert('Não foi possível realizar o cadastro tente novamente!')
        }

    }

    const setScheduleItemsValue = (position: number, field: string, value: string) => {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){ // se o item que quero alterar for igual ao item do array original eu retorno
                return {...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });
        console.log(updateScheduleItems);
        setScheduleItems(updateScheduleItems);
    }

    //-----------------------------------------------------------------------------------------------------------------------
    return(
        <div id="page-teacher-form" className="container">
                <PageHeader title="Que incrível que você quer dar aulas" 
                    description="O primeiro passo é preencher esse formulário de inscrição"
                />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input 
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            name="name" 
                            label="Nome Completo"
                        />

                        <Input 
                            value={avatar}
                            onChange={(e) => {setAvatar(e.target.value)}}
                            name="avatar" 
                            label="Avatar"
                        />

                        <Input 
                            value={whatsapp}
                            onChange={(e) => {setWhatsapp(e.target.value)}}
                            name="whatsapp" 
                            label="Whatsapp"
                        />

                        <Textarea 
                            value={bio}
                            onChange={(e) => {setBio(e.target.value)}}
                            name="bio" 
                            label="Biografia" 
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a Aula</legend>

                        <Select 
                            value={subject}
                            onChange={(e) => {setSubject(e.target.value)}}
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

                        <Input
                            value={cost}
                            onChange={(e) => {setCost(e.target.value)}} 
                            name="cost" 
                            label="Custo da sua hora por aula"
                        />
                        
                    </fieldset>

                    <fieldset>
                        <legend>Horários Disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo Horário
                            </button>
                        </legend>
                        
                        {scheduleItems.map( (scheduleItem, index) => {
                            return(
                                        <div key={scheduleItem.week_day} className="schedule-item">
                                            <Select
                                                value={scheduleItem.week_day} 
                                                onChange={e => setScheduleItemsValue(index, 'week_day', e.target.value)}
                                                className="select"
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
                    
                                            <Input
                                                value={scheduleItem.from}
                                                onChange={e => setScheduleItemsValue(index, 'from', e.target.value)}
                                                name="from" 
                                                label="Das" 
                                                type="time">
                                            </Input>

                                            <Input
                                                value={scheduleItem.to}
                                                onChange={e => setScheduleItemsValue(index, 'to', e.target.value)}
                                                name="to" 
                                                label="Até" 
                                                type="time">
                                            </Input>
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
                            <button type="submit">Salvar Cadastro</button>
                    </footer>
                </form>
            </main>    
        </div>
    )
}

export default TeacherForm;