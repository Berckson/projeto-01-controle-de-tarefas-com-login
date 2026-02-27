import React, { useState } from 'react';
import Login from './components/telas/Login';
import Lista from './components/telas/Lista';

export default function App() {
  const [tela, setTela] = useState('login');

  return (
    <>
      {tela === 'login' && (
        <Login irLista={() => setTela('lista')} />
      )}

      {tela === 'lista' && (
        <Lista voltar={() => setTela('login')} />
      )}
    </>
  );
}