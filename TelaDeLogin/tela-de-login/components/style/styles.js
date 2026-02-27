import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Fundo geral (imagem)
  background: {
    flex: 1,
  },

  // Container principal centralizado
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  // Logo LIST+
  logo: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 25,
    letterSpacing: 2,
  },

  // Caixa branca (login e lista)
  box: {
    width: '100%',
    backgroundColor: '#ffffffdd',
    padding: 20,
    borderRadius: 15,
    elevation: 6,
  },

  // Inputs
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  // Texto simples
  texto: {
    fontSize: 16,
    color: '#333',
  },

  // Texto concluído (riscado)
  concluido: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
  },

  // Item da lista
  item: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Texto quando não tem tarefas
  vazio: {
    marginTop: 15,
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
});