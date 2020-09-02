import React from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const Teacherlist = () => {
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis" />
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