import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../style/styles';

export default function Inicio({ nome, irLista, sair }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>LIST+</Text>

      <Text style={styles.subtitle}>
        Bem-vindo, {nome} 👋
      </Text>

      <View style={styles.buttons}>
        <Button title="Ir para lista" onPress={irLista} />
        <Button title="Sair" onPress={sair} />
      </View>
    </View>
  );
}