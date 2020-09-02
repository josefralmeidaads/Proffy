import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8257e5',
        justifyContent: 'center',
        padding: 40
    },

    content: {
        flex: 1,
        justifyContent: 'center',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#FFF',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description: {
        marginTop: 24,
        color: '#D4C2FF',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },

    okButton: {
        marginTop: 20,
        backgroundColor: '#04D361',
        justifyContent: 'center',
        height: 58,
        borderRadius: 8,
        elevation: 4,
        alignItems: 'center'
    },

    okButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }

});

export default styles;