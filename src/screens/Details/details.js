import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

import HeaderComponent from '../../components/Header/header'

const Details = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <HeaderComponent
                subTitle='Detalhes'
                iconName='chevron-left'
                onPress={() => navigation.goBack()}/>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>TIPO: </Text>
                <Text style={styles.incidentValue}>Abastecimento</Text>
                <Text style={styles.incidentProperty}>DATA:</Text>
                <Text style={styles.incidentValue}>06/04/2020</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>R$ 50,00</Text>
                <Text style={styles.incidentProperty}>KM:</Text>
                <Text style={styles.incidentValue}>88257.25</Text>

                <View style={styles.actionButtons}>
                    <TouchableHighlight
                        onPress={() => {}}
                        style={styles.action}>
                        <Icon name='trash-2' size={16} color='#FFF'/>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => navigation.navigate('NewIncident')}
                        style={styles.action}>
                        <Icon name='edit' size={16} color='#FFF'/>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
};

export default Details;