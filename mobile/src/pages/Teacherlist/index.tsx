import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';

const Teacherlist = () => {
    const[teachers, setTeachers] = useState([]);
    const[subject, setSubject] = useState('');
    const[week_day, setWeek_day] = useState(0);
    const[time, setTime] = useState('');

    useEffect(() => {

       const handleSearTeachers = async() => {
           const dados = await api.get('classes', {
               params: {
                    subject,
                    week_day,
                    time
               }
           })

           setTeachers(dados.data)
       }

    }, []);

    const [isFiltersVisible, SetisFilterVisible] = useState(false);

    const handleToggleFiltersVisible = () => {
       SetisFilterVisible(!isFiltersVisible);
    }

    return(
        <View style={styles.container}>
            <PageHeader 
                title="Proffys Disponíveis" 
                headerRight={(
                    <BorderlessButton>
                        <Feather 
                            onPress={handleToggleFiltersVisible}
                            name="filter" 
                            size={26} 
                            color='#D4C2FF'
                        />
                    </BorderlessButton>
                )} 
            >
               {/* Só irá aparecer se estiver true o isFiltersVisbile*/}
             { isFiltersVisible && (<View style={styles.searchForm}> 
                
                <Text style={styles.label}>
                  Matéria
                </Text>
                <TextInput 
                    value = {subject}
                    style={styles.input}
                    placeholder= "Digite a matéria"
                    placeholderTextColor="#C1BCCC" 
                />

                <View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>
                            Dia da semana
                        </Text>
                        <TextInput 
                            value={week_day}
                            style={styles.input}                          
                            placeholder= "Qual o dia" 
                            placeholderTextColor="#C1BCCC"
                        />
                    </View>

                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>
                            Horário
                        </Text>
                        <TextInput 
                            value={time}
                            style={styles.input}                          
                            placeholder= "Qual o horário"
                            placeholderTextColor="#C1BCCC" 
                        />
                    </View>
                </View>

                <RectButton style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>
                        Filtrar
                    </Text>
                </RectButton>
             </View> )}

            </PageHeader>   
                <ScrollView 
                    style={styles.teacherlist}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 16
                    }}
                > 
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                    <TeacherItem />
                </ScrollView>
        </View>
    )
}

export default Teacherlist;