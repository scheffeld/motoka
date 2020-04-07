import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Form } from 'native-base';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

import ButtonComponent from '../../components/Button/button'
import InputComponent from '../../components/Input/input'
import HeaderComponent from '../../components/Header/header'

const NewUser = () => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <HeaderComponent subTitle='Novo Usuário' iconName='chevron-left' onPress={() => navigation.goBack()}/>
            <View style={styles.content}>
                <Form style={styles.form}>
                    <View>
                    <InputComponent
                        label='Nome'/>
                    <InputComponent
                        label='Email'/>
                    <InputComponent
                        label='Confirmação do Email'/>
                    <InputComponent
                        label='Senha'/>
                    <InputComponent
                        label='Confirmação da Senha'/>
                    </View>
                </Form>
                    
                <ButtonComponent
                        label='Cadastrar'
                        type='primary'/>
            </View>
        </View>
    )
};

export default NewUser;