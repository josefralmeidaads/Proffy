import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

const Landing = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {

        const handleTotalConnections = async() => {
            const response = await api.get('connections');
            
            const{total} = response.data;
            setTotalConnections(total);
        }

        handleTotalConnections();

    }, []);

    const { navigate } = useNavigation();

    const handleNavigateToGiveClasses = () => {
        navigate('GiveClasses');
    }

    const handleNavigateToStudyPages = () => {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}> Seja bem-vindo, {'\n'} 
                <Text style={styles.titleBold}> O que deseja fazer? </Text>
            </Text>

            <View style={styles.buttonsContainer} >
                <RectButton 
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />

                    <Text style={styles.textButton} >Estudar</Text>
                </RectButton>

                <RectButton 
                    onPress= {handleNavigateToGiveClasses}
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon} />

                    <Text style={styles.textButton}>Dar Aulas</Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas.{'  '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;