import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const Teacherlist = () => {
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis" />
            <TeacherItem />
        </View>
    )
}

export default Teacherlist;