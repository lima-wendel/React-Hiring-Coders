import React, { useState } from "react"; //useState permite citar e modificar estados
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

// JSX (html dentro do JS)
function App(props) {
  const history = useHistory();
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => { 
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      history.push('/repositories')
  });
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