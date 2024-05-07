import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Text } from './Text';

const texts = [
  {text: "Bienvenido a mi sitio web personal, donde puedes explorar una selección curada de mis proyectos, profundizar en mis habilidades y leer detenidamente mi currículum. Como desarrollador experimentado, he tenido el privilegio de trabajar en una amplia gama de proyectos, cada uno de los cuales muestra mi experiencia y pasión por crear soluciones innovadoras. Ya sea que esté interesado en desarrollo web, aplicaciones móviles o ingeniería de software, aquí encontrará un vistazo de mis capacidades y experiencias. No dude en comunicarse si tiene alguna pregunta u oportunidad de colaborar."}
];

const description = 'Bienvenido a mi sitio web personal, donde puedes explorar una selección curada de mis proyectos, profundizar en mis habilidades y leer detenidamente mi currículum. Como desarrollador experimentado, he tenido el privilegio de trabajar en una amplia gama de proyectos, cada uno de los cuales muestra mi experiencia y pasión por crear soluciones innovadoras. Ya sea que esté interesado en desarrollo web, aplicaciones móviles o ingeniería de software, aquí encontrará un vistazo de mis capacidades y experiencias. No dude en comunicarse si tiene alguna pregunta u oportunidad de colaborar.';

function App() {
  return (
    <React.Fragment>
       <Text text={description}/>
    </React.Fragment>
  );
}

export default App;
