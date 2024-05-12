import React from 'react';
import { Text } from './../components/Text';
import { Tarjet } from './../components/Tarjet';
import { Title } from './../components/Titles';

const description = 'Bienvenido a mi sitio web personal, donde puedes explorar una selección mis proyectos, profundizar en mis habilidades y leer detenidamente mi currículum. Como desarrollador junior, he tenido el privilegio de trabajar en una amplia gama de proyectos, cada uno de los cuales muestra mi experiencia y pasión por crear soluciones innovadoras. Ya sea que esté interesado en desarrollo web, aplicaciones móviles o ingeniería de software, aquí encontrará un vistazo de mis capacidades y experiencias. No dude en comunicarse si tiene alguna pregunta u oportunidad de colaborar.';
const descripcionTi = "Descripción"

function Home() {
    return (
      <React.Fragment>

          <Title titles={descripcionTi}></Title>
          <Text text={description}/>
          <Tarjet></Tarjet>
  
      </React.Fragment>
    );
  }

export {Home}