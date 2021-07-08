import React, { useState } from "react"; //useState permite citar e modificar estados
import axios from 'axios';
import * as S from './styled';

// JSX (html dentro do JS)
function App(props) {
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));
  }

  return (
    <S.Container>
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={ e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;

// useState [ usuario, setUsuario ]
// componentes, estados, propriedades