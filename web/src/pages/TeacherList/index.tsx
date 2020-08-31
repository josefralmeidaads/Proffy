import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList = () => {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                <Select className="select"
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

                    <Input type="time" name="time" label="Hora"/>
                </form>
            </PageHeader>
            <main>
            <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;