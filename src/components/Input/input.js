import React from 'react';
import { Item, Label, Input } from 'native-base';
import styles from './styles'

const InputComponent = ({ label, value, onChangeText, password, autoCapitalize }) => {
    return(
        <Item stackedLabel style={styles.item}>
            <Label style={styles.label}>{label}</Label>
            <Input
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
                autoCapitalize={password ? 'none' : autoCapitalize }
                keyboardAppearance='light'/>
        </Item>
    )
};

export default InputComponent
