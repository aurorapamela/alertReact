import React from "react";
import "./App.css";

const Alert = props => {
  // aca tenemos que retorna el HTML esperado utilizando las propiedades
  return (
    <div class="alert alert-primary" role="alert">
      {props.text}
    </div>
  );
};

const App = () => {
  return <Alert text="¡Ocurrió un error!" />;
};

export default App;
