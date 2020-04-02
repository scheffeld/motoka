import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Button, Input, Form, Item, Label } from 'native-base';

import styles from './styles'
import logoImg from '../../assets/logo.png'

import ButtonComponent from '../../components/Button/button'

const Login = () => {
    return(
        <View style={styles.container}>
            <View>
                <Image source={logoImg}/>
            </View>
            <View>
                <Text style={styles.text}>Continue com o seu</Text>
                <Text style={styles.textBold}>LOGIN</Text>
                <Form style={styles.form}>
                    <Item stackedLabel style={styles.item}>
                        <Label style={styles.label}>Email</Label>
                        <Input style={styles.input}/>
                    </Item>
                    <Item stackedLabel style={styles.item}>
                        <Label style={styles.label}>Senha</Label>
                        <Input style={styles.input}/>
                    </Item>
                    <TouchableHighlight style={styles.buttonForgot}>
                        <Text style={styles.textForgot}>Esqueci a senha</Text>
                    </TouchableHighlight>
                </Form>
            </View>
            <View style={styles.buttons}>
                <ButtonComponent
                    type='secondary'
                    label='Cadastro'/>
                <ButtonComponent
                    type='primary'
                    label='Entrar'/>
            </View>
        </View>
    )
};

export default Login;