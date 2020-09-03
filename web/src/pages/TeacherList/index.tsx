import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

toast.configure();


const TeacherList = () => {

    const notify = () => {
        toast.error('Professor não encontrado!')
    }

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day,setWeek_day] = useState('');
    const [time, setTime] = useState('');
    //--------------------------------------------------------------------------------------------------------------------------------------------------
    const searchTeacher = async(e: FormEvent) => {
        e.preventDefault();

        try{
            const response = await api.get('classes', {
                params: {
                    subject,
                    week_day,
                    time
                }
            })
    
            setTeachers(response.data);
        }catch(erro){
            notify();
        }
       
    }
    //--------------------------------------------------------------------------------------------------------------------------------------------------
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeacher}>
                    <Select
                        value = {subject}
                        onChange={(e) => {setSubject(e.target.value)}} 
                        className="select"
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

                    <Select 
                        value = {week_day}
                        onChange={(e) => {setWeek_day(e.target.value)}}
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
                        value = {time}
                        onChange={(e) => {
                            setTime(e.target.value)}} 
                        type="time" 
                        name="time" 
                        label="Hora"
                    />
                    <button type="submit">
                        buscar
                    </button>
                </form>
            </PageHeader>
            <main>
            {teachers.map( (teacher: Teacher) => {
                return (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                )
            })}
            </main>
        </div>
    )
}

export default TeacherList;