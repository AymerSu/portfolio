import React from 'react';
import './../styles/Image.css';

function Image() {
    return (
        <img 
            src={process.env.PUBLIC_URL + '/FotoPerfil-removebg-preview.png'} 
            alt="Imagen de perfil"
            className="round-image"
        />
    );
}

export {Image};