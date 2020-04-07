import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {    
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#FFF'
    },
    listContainer: {
        marginTop: 20
    },
    incident: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#F0F0F0',
        marginBottom: 16
    },
    incidentProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;