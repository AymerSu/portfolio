import React from 'react';
import { Title } from './../components/Titles';
import { Tarjetpr } from '../components/Tarjetpr';

const titlePri = "Proyectos personales realizados";
const textDes = "En esta sección encontrara los proyectos personales realizados y con su respectivo repositorio:";

function Project() {
    return (
        <React.Fragment>
            
            <Title titles={titlePri} />
            <p>{textDes}</p>
            <hr></hr>

            <Tarjetpr 
                titleR={'Repositorio de imagenes Corporativo'}
                textDeP={'Proyecto personal creado para la gestión de imágenes corporativas, subida y descarga, además de un panel de administración para los usuarios y empresas registrados. Las imágenes se clasifican por empresas y los usuarios de igual manera. Se desarrolló en dos partes: backend y frontend. El backend utiliza tecnologías como Node.js, npm, TypeScript y TypeORM, mientras que el frontend se desarrolló en Angular.'}
                pathGif={'/project2.gif'}
                urlR={'https://github.com/AymerSu/AymerSena.github.io'}
            />

            <Tarjetpr 
                titleR={'Portafolio WEB desarrollador'}
                textDeP={'He desarrollado una página web utilizando React con el propósito de exhibir mi portafolio profesional, mi hoja de vida y destacar las diversas habilidades que he adquirido a lo largo de mi trayectoria. Esta plataforma ofrece una ventana digital donde puedo mostrar de manera detallada mis proyectos, experiencias laborales, y el conjunto de habilidades técnicas.'}
                pathGif={'/project3.gif'}
                urlR={'https://github.com/AymerSu/AymerSena.github.io'}
            />

            <Tarjetpr 
                titleR={'Gestor documental RRHH'}
                textDeP={'Proyecto de grado en el SENA: gestor documental de RRHH, desarrollado en PHP, base de datos relacional MySQL. Principalmente, mi aporte fue en la creación de la base de datos y la lógica del backend, con cierta ayuda en la interfaz del inicio de sesión, sin librerias en el backend.'}
                pathGif={'/project1.gif'}
                urlR={'https://github.com/AymerSu/AymerSena.github.io'}
            />

        </React.Fragment>
    );
}

export { Project };