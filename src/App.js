import React from "react";

// JSX (html dentro do JS)
function App(props) {
  return (
  <div>
    <h1> { props.title } { props.user } </h1>
    <input name="usuario" id="usuario"className="usuarioInput" placeholder="Usuário"/>
  </div>
  );
}

export default App;
