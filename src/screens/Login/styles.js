import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#FFF'
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        marginVertical: 10
    },
    textBold: {
        fontSize: 36,
        color: '#E02041',
        fontWeight: 'bold'
    },
    form: {
        marginLeft: -10,
        marginTop: 30
    },
    buttonForgot: {
        alignSelf: 'flex-end',
        marginVertical: 10,
    },
    textForgot: {
        color: '#E02041',
        fontWeight: '700'
    }
});

export default styles;