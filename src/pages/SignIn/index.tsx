import React from 'react';
import {Image} from 'react-native';

import Input from '../../Components/Input';
import Button from '../../Components/Button';

import logoImg from '../../assets/logo.png';

import {Container, Title} from './styles';

const SignIn: React.FC = () => {

  return (
    <>
      <Container>
        <Image source={logoImg} />

        <Title>Faça seu Logon</Title>

        <Input name="email" icon="mail" placeholder="E-mail" />
        <Input name="password" icon="lock" placeholder="Senha"/>

        <Button onPress={() => {}} >Entrar</Button>
        
      </Container>
    </>
  );
}

export default SignIn;