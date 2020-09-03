import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';
import AsyncStorage, { useAsyncStorage } from '@react-native-community/async-storage';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeachersItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem:React.FC<TeachersItemProps> = (props) => {
    const { teacher, favorited } = props // teacher e um objeto de uma propriedade com informações do teacher

    const[isFavorited, setIsFavorited] = useState(favorited);
    
    const messagem = 'Olá tenho interesse em suas aulas, entre em contato comigo!';

    const handleLinkToWhatsapp = async() => {
        await api.post('connections', {
          user_id: teacher.id
        })

        Linking.openURL(`whatsapp://send?text=${messagem}&phone=+55 ${teacher.whatsapp}`);
    }

    const handleToggleFavorite = async() => {
      const favorites = await AsyncStorage.getItem('favorites');

      let favoritesArray = [];
        
        if(favorites){
          favoritesArray = JSON.parse(favorites);
        }


      if (isFavorited){
        //preciso remover dos favoritos
        const favoriteIndex = favoritesArray.findIndex( (teacherItem:Teacher) => {
          return teacherItem.id === teacher.id;
        });

        favoritesArray.splice(favoriteIndex, 1);
        setIsFavorited(false);

      }else {
        //preciso adicionar dos favoritos
        
        favoritesArray.push(teacher); // adicionando professor ao array de favoritos
        setIsFavorited(true);
      }

      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray)) // salvando o array de favoritos ao banco local
    }

    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                
                <Image 
                    style={styles.avatar} 
                    source={{uri: teacher.avatar}} 
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        {teacher.name}
                    </Text>

                    <Text style={styles.subject}>
                        {teacher.subject}
                    </Text>

                </View>
            </View>

          <Text style={styles.bio}>
                {teacher.bio}
          </Text>
          
          <View style={styles.footer}>
            <Text style={styles.price}>
               Preço/Hora {'   '}
               <Text style={styles.priceValue}>
                R$ {teacher.cost}
               </Text>
            </Text>
            <View style={styles.buttonsContainer}>

              <RectButton 
                onPress={handleToggleFavorite}
                style={[styles.favoriteButton, 
                  isFavorited ? styles.favorited : {},
                ]}
              >
                { 
                  isFavorited 
                  ? <Image source={unFavoriteIcon} /> 
                  : <Image source={heartOutlineIcon} /> 
                }
              </RectButton>

              <RectButton 
                onPress={handleLinkToWhatsapp} 
                style={styles.contactButton}
              >
                <Image source={whatsappIcon} />
                    <Text style={styles.contactButtonText}>
                        Entrar em contato
                    </Text>
              </RectButton>

            </View>
          </View>
        </View>
    )
}

export default TeacherItem;