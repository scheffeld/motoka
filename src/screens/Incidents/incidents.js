import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

import HeaderComponent from '../../components/Header/header'

const Incidents = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <HeaderComponent
                subTitle='Registros'
                iconName='log-out'
                onPress={() => navigation.navigate('Login')}/>
            <FlatList
                data={[1, 2, 3]}
                style={styles.listContainer}
                showsVerticalScrollIndicator={false}
                renderItem={({item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>TIPO: </Text>
                        <Text style={styles.incidentValue}>Abastecimento</Text>
                        <Text style={styles.incidentProperty}>DATA:</Text>
                        <Text style={styles.incidentValue}>06/04/2020</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={() => navigation.navigate('Details')}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Icon name='chevron-right' color='#E02041' size={16}/>
                        </TouchableOpacity>
                    </View>
                )}/>
        </View>
    )
};

export default Incidents;