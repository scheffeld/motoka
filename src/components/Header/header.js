import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles'

const HeaderComponent = ({ subTitle }) => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerTitle}>motoka</Text>
                <Text style={styles.headerSubTitle}>{subTitle}</Text>
            </View>
            <View style={styles.headerRight}>
                <Icon name='arrow-left' color='#E02041' size={22}/>
            </View>
        </View>
    )
};

export default HeaderComponent;