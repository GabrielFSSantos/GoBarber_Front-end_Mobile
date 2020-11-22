import React, {useCallback, useRef} from 'react';
import {Image, KeyboardAvoidingView, Platform, View, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';


import Input from '../../Components/Input';
import Button from '../../Components/Button';

import logoImg from '../../assets/logo.png';

import {Container, Title, BackToSignIn, BackToSignInText} from './styles';

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback((data: object) => {
    console.log(data);
  },[]);

  return (
    <>
      <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined} enabled>

        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={logoImg} />
            
            <View>
              <Title>Crie sua conta</Title>
            </View>
            
            <Form ref={formRef} onSubmit={handleSignUp} style={{width: '100%'}}>
              
              <Input name="name" icon="user" placeholder="Nome" autoCapitalize="words" keyboardType="email-address" returnKeyType="next" onSubmitEditing={() => {
                emailInputRef.current?.focus();
              }} />

              <Input ref={emailInputRef} name="email" icon="mail" placeholder="E-mail" autoCorrect={false} autoCapitalize="none" keyboardType="email-address" returnKeyType="next" onSubmitEditing={() => {
                passwordInputRef.current?.focus();
              }}/>

              <Input ref={passwordInputRef} name="password" icon="lock" placeholder="Senha" secureTextEntry textContentType="newPassword" returnKeyType="send" 
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}/>

              <Button onPress={() => {
                formRef.current?.submitForm();
              }} >Entrar</Button>
            </Form>
            
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      
      <BackToSignIn onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#FFFFFF" />
        <BackToSignInText>Voltar para logon</BackToSignInText>
      </BackToSignIn>
    </>
  );
}

export default SignUp;