import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

import Button from "./Componentes/Boton.jsx";
import Formulario from "./Componentes/Formulario.jsx";


function App() {

  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');

  const BotonFormulario = () => {
    if (contraseña === '252525') {
      return (<Button></Button>)
    } else {
      return (<></>)
    }
  }

  return (
    <div className="App">
      <h1> Desafio de Estados y Componentes</h1>

      <Formulario
        nombre={nombre}
        setNombre={setNombre}
        contraseña={contraseña}
        setContraseña={setContraseña}>


      </Formulario>
      <BotonFormulario></BotonFormulario>

    </div>
  );
}

export default App;
