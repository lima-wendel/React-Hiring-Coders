import React, { useState } from "react"; //useState permite citar e modificar estados
import axios from 'axios';

// JSX (html dentro do JS)
function App(props) {
  const [ usuario, setUsuario ] = useState('');
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response));
  }

  return (
    <div>
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={ e => setUsuario(e.target.value)}/>
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </div>
  );
}

export default App;

// useState [ usuario, setUsuario ]
// componentes, estados, propriedades

