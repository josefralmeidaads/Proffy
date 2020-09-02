import React from 'react';
import styles from './styles';
import { View, Image, Text, ImageBackground } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png'
import logoImg from '../../assets/images/logo.png'
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

interface PageHeaderProps {
    title: string;
}

const PageHeader:React.FC<PageHeaderProps> = (props) => {
    const { title, children } = props;
    const { navigate } = useNavigation();

    const handleGoBack = () => {
        navigate('Landing');
    }

    return(
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>
                    <Image source={logoImg} resizeMode="contain"/>
            
            </View> 
            <Text style={styles.title}>{title}</Text>
            {children}    
        </View>
    )
}

export default PageHeader;