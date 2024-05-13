import React from 'react';
import './../styles/Contact.css';
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

function Contact(params) {
    return (
        <React.Fragment>
        
        <div class="container">
            <h1>Contacto</h1>

            <p>Gracias por visitar mi página de portafolio online. Si tienes alguna pregunta, comentario o simplemente quieres ponerte en contacto conmigo, ¡no dudes en hacerlo! Estoy aquí para ayudarte.</p>

            <h2>Email</h2>
            <div class="secc-email">    
                <div>
                    <p>Correo electronico de contacto:</p>
                    <p>aymeryesid.aycs@gmail.com</p>
                </div>
                <MdMarkEmailUnread size={100}/>
            </div>

            <div class="social-links">
                <h2>Redes Sociales</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/aymer-yesid-cruz-suescun-4502342bb/" target="_blank">LinkedIn</a></li>
                    <li><a href="https://github.com/AymerSu" target="_blank">GitHub</a></li>
                </ul>
                <ul>
                    <li><FaLinkedin size={20}/></li>
                    <li><FaGithubSquare size={20}/></li>
                </ul>
            </div>
    </div>

        </React.Fragment>
    );
}

export { Contact }