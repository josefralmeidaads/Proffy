import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles';


const TeacherItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: ""}} />
            </View>
        </View>
    )
}

export default TeacherItem;