import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image, ToastAndroid } from 'react-native'
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';



const Teacherlist = () => {
    const[favorites, setFavorites] = useState<number[]>([]);
    const[teachers, setTeachers] = useState([]);
    const[subject, setSubject] = useState('');
    const[week_day, setWeek_day] = useState('');
    const[time, setTime] = useState('');

    const loadFavorites = () => {
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
               const favoritedTeachers = JSON.parse(response);

               const favoritedTeachersIds = favoritedTeachers.map( (teacher: Teacher) => {
                    return teacher.id;
               })

               setFavorites(favoritedTeachersIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

       const handleSearTeachers = async() => {
        loadFavorites();

           const dados = await api.get('classes', {
               params: {
                    subject,
                    week_day,
                    time
               }
               
           })
           SetisFilterVisible(false);
           setTeachers(dados.data);
       }

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
                    onChangeText={texto => setSubject(texto)}
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
                            onChangeText={texto => setWeek_day(texto)}
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
                            onChangeText={texto => setTime(texto)}
                            style={styles.input}                          
                            placeholder= "Qual o horário"
                            placeholderTextColor="#C1BCCC" 
                        />
                    </View>
                </View>

                <RectButton onPress={handleSearTeachers} style={styles.submitButton}>
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
                 {teachers.map((teacher: Teacher) => {
                     return(
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)} //estou verificado se dentro de meu teachers favorites que estou incluindo existe um prof com o id que está sendo incluso em favorites
                        />
                     );
                 })}
                </ScrollView>
        </View>
    )
}

export default Teacherlist;