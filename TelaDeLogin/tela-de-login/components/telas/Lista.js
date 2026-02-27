import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import style from '../style/styles';

export default function Lista({ voltar }) {
  const [tarefa, setTarefa] = useState('');
  const [itens, setItens] = useState([]);

  function adicionar() {
    if (tarefa !== '') {
      setItens([...itens, { texto: tarefa, concluido: false }]);
      setTarefa('');
    }
  }

  function remover(index) {
    const novaLista = itens.filter((_, i) => i !== index);
    setItens(novaLista);
  }

  function concluir(index) {
    const novaLista = [...itens];
    novaLista[index].concluido = !novaLista[index].concluido;
    setItens(novaLista);
  }

  return (
    <ImageBackground
      source={require('../../assets/fundoLogin.png')}
      style={style.background}
      resizeMode="cover"
    >
      <View style={style.container}>
        <Text style={style.logo}>LIST+</Text>

        <View style={style.box}>
          <TextInput
            style={style.input}
            placeholder="Digite uma tarefa"
            value={tarefa}
            onChangeText={setTarefa}
          />

          <Button title="Adicionar" onPress={adicionar} />

          {itens.length === 0 && (
            <Text style={style.vazio}>Nenhuma tarefa</Text>
          )}

          <FlatList
            data={itens}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={style.item}>
                <TouchableOpacity onPress={() => concluir(index)}>
                  <Text style={item.concluido ? style.concluido : style.texto}>
                    {item.texto}
                  </Text>
                </TouchableOpacity>

                <Button title="X" onPress={() => remover(index)} />
              </View>
            )}
          />

          <Button title="Sair" onPress={voltar} />
        </View>
      </View>
    </ImageBackground>
  );
}