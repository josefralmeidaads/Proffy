import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';


const TeacherItem = () => {
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
                
                <Image 
                    style={styles.avatar} 
                    source={{uri: 'https://avatars1.githubusercontent.com/u/69639482?s=460&u=16ce5200e0562f44d5e8059ad80ed7d0f03fc9de&v=4'}} 
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>
                        José Filho
                    </Text>

                    <Text style={styles.subject}>
                        Análise e Des. Sistemas
                    </Text>

                </View>
            </View>
          <Text style={styles.bio}>
                Entusiasta da Computação!
                {'\n'}{'\n'}
                Apaixonado por computação desde seus 14 anos,
                busca sempre evoluir em seu conhecimento,
                não gosta de ficar estagnado em seu ambiente sempre buscando
                uma mudança em sua rotina tanto profissional quanto pessoal.
          </Text>
          
          <View style={styles.footer}>
            <Text style={styles.price}>
               Preço/Hora {'   '}
               <Text style={styles.priceValue}>
                R$ 120,00
               </Text>
            </Text>
            <View style={styles.buttonsContainer}>

              <RectButton style={[styles.favoriteButton, styles.favorited]}>
                {/*<Image source={heartOutlineIcon} />*/}
                <Image source={unFavoriteIcon} />
              </RectButton>

              <RectButton style={styles.contactButton}>
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