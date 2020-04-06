import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles'

const ButtonComponent = ({ type, label, onPress }) => {
    return(
        <TouchableHighlight
            style={type == 'primary' ? styles.buttonPrimary : styles.buttonSecondary}
            underlayColor={type == 'primary' ? '#e02041' : '#FFF'}
            onPress={onPress}>
            <Text style={type == 'primary' ? styles.textPrimary : styles.textSecondary}>{label.toUpperCase()}</Text>
        </TouchableHighlight>
    )
};

export default ButtonComponent;