import React from 'react';
import { Title } from './../components/Titles';

const titlePri = "Proyectos personales realizados";
const textDes = "En este proyecto encontrara los proyectos personales realizados y con su respectivo repositorio:"

function Project() {
    return (
        <React.Fragment>
            
            <Title titles={titlePri} />
            <p>{textDes}</p>
            <hr></hr>

        </React.Fragment>
    );
}

export { Project };