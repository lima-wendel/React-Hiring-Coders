import React, { useState } from "react"; //useState permite citar e modificar estados

// JSX (html dentro do JS)
function App(props) {
  //const [usuario, setUsuario] = useState('Joca')
  return (
  <>
    <input name="usuario" id="usuario"className="usuarioInput" placeholder="Usuário"/>
    <button type="button">Pesquisar</button>
  </>
  );
}

export default App;

// useState [ usuario, setUsuario ]
// componentes, estados, propriedades