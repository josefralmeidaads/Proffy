import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },

    banner: {
        width: '100%',
        resizeMode: 'contain', //redimensionar a imagem a proporção exata

    },

    title: {
        fontFamily: 'Poppins_400Regular',
        color: '#FFF',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },

    titleBold: {
        fontFamily: 'Poppins_600SemiBold',
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },

    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: "space-between",
        borderRadius: 8,
        padding: 24,
        elevation: 4,
    },

    buttonPrimary: {
        backgroundColor: '#9871F5',
    },

    buttonSecondary:{
        backgroundColor: '#04D361',
    },

    textButton: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 20
    },

    totalConnections: {
        color: '#D4C2FF',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        fontFamily: 'Poppins_400Regular',
        marginTop: 40,
    },

});

export default styles;