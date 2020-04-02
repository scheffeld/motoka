import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#F0F0E5'
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10
    },
    textBold: {
        fontSize: 36,
        fontWeight: '700',
        color: '#E02041'
    },
    form: {
        marginLeft: -10,
        marginTop: 30
    },
    item: {
        borderBottomColor: '#000',
        borderBottomWidth: 0.5
    },
    label: {
        color: '#1C1C1C',
        fontWeight: '500'
    },
    buttonForgot: {
        alignSelf: 'flex-end',
        marginVertical: 10
    },
    textForgot: {
        color: '#E02041',
        fontWeight: '700'
    },
    buttonLogin: {
        backgroundColor: '#E02041',
        width: '100%',
        borderRadius: 2,
        paddingVertical: 16
    },
    textLogin: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF'
    },
    textRegister: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#E02041'
    },
    buttonRegister: {
        width: '100%',
        borderRadius: 2,
        paddingVertical: 16,
        marginTop: 10
    }
});

export default styles;