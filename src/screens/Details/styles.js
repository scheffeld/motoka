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
        marginVertical: 16
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
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    action: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E02041',
        margin: 10,
        paddingVertical: 16,
        borderRadius: 8
    },
    detailsButtonText: {
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});

export default styles;