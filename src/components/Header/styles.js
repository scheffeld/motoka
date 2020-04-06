import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 36,
        color: '#E02041',
        fontWeight: 'bold'
    },
    headerSubTitle: {
        fontSize: 16,
        color: '#E02041',
        fontWeight: '600'
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerLeft: {
        alignItems: 'flex-start'
    },
    headerRight: {
        alignItems: 'center'
    }
})

export default styles