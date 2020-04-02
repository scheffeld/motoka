import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import styles from './styles'

const ButtonComponent = ({ type, label }) => {
    return(
        <TouchableHighlight
            style={type == 'primary' ? styles.buttonPrimary : styles.buttonSecondary}
            onPress={() => {}}>
            <Text style={type == 'primary' ? styles.textPrimary : styles.textSecondary}>Entrar</Text>
        </TouchableHighlight>
    )
};

export default ButtonComponent;