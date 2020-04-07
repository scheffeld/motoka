import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableHighlight, StatusBar } from 'react-native';
import { Button, Input, Form, Item, Label } from 'native-base';

import styles from './styles'
import logoImg from '../../assets/logo.png'

import ButtonComponent from '../../components/Button/button'
import InputComponent from '../../components/Input/input'

const Login = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#FFF' barStyle='dark-content'/>
            <View>
                <Text style={styles.textBold}>motoka</Text>
            </View>
            <View>
                <Text style={styles.text}>Continue com o seu</Text>
                <Text style={styles.textBold}>LOGIN</Text>
                <Form style={styles.form}>
                    <InputComponent
                        label='Email'
                        autoCapitalize='none'
                        />
                    <InputComponent
                        label='Senha'
                        password/>
                    <TouchableHighlight style={styles.buttonForgot}>
                        <Text style={styles.textForgot}>Esqueci a senha</Text>
                    </TouchableHighlight>
                </Form>
            </View>
            <View style={styles.buttons}>
                <ButtonComponent
                    type='secondary'
                    label='Cadastro'
                    onPress={() => navigation.push('NewUser')}/>
                <ButtonComponent
                    type='primary'
                    label='Entrar'
                    onPress={() => navigation.push('Incidents')}/>
            </View>
        </View>
    )
};

export default Login;