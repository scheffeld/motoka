import React from 'react';
import { View, Text,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles'

const HeaderComponent = ({ subTitle, iconName, onPress }) => {
    return(
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerTitle}>motoka</Text>
                <Text style={styles.headerSubTitle}>{subTitle}</Text>
            </View>
            <TouchableHighlight
                onPress={onPress}
                underlayColor='transparent'
                style={styles.headerRight}>
                <Icon name={iconName} color='#E02041' size={22}/>
            </TouchableHighlight>
        </View>
    )
};

export default HeaderComponent;