import React, { useState } from 'react';
import { View, Text, TextInput, Button, ImageBackground } from 'react-native';
import style from '../style/styles';

export default function Login({ irLista }) {
  const [usuario, setUsuario] = useState('');
  const [cpf, setCpf] = useState('');

  const usuarioCorreto = 'thierry';
  const usuarioCpf = '400028922';

  function verificar() {
    if (usuario === usuarioCorreto && cpf === usuarioCpf) {
      irLista();
    } else {
      alert('Usuário ou CPF incorretos');
    }
  }
  return (
    <ImageBackground
      source={require('../../assets/fundoLogin.png')}
      style={style.background}
      resizeMode="cover">
      <View style={style.container}>
        <Text style={style.logo}>LIST+</Text>

        <View style={style.box}>
          <TextInput
            style={style.input}
            placeholder="Usuário"
            value={usuario}
            onChangeText={setUsuario}
          />

          <TextInput
            style={style.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            keyboardType="numeric"
          />

          <Button title="Entrar" onPress={verificar} />
        </View>
      </View>
    </ImageBackground>
  );
}
