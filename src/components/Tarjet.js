import './../styles/Tarjet.css';
import { Buttons } from './Buttons';

const textButtons = "Detallar"; 

function Tarjet() {
    return (
    <div class="container-tarjet">
        <div class="tarjeta">
            <h1>Experiencia</h1>
            <h3>Banco Davivienda</h3>
            <p>Desarrollador Junior incorporado al Bootcamp TechCamp del banco Davivienda por una duración de 6 meses</p>
            <Buttons textoButton={textButtons}></Buttons>
            <hr></hr>
            <h3>Ediciones Gamma S.A.</h3>
            <p>Analista de sistemas en la coordinación de sistemas, automatizando procesos de diferentes areas por una duración de 6 años.</p>
            <Buttons textoButton={textButtons}></Buttons>
        </div>
        
        <div class="tarjeta">
            <h1>Estudios</h1>
            <h3>SENA</h3>
            <p>Analisis y desarrollo de sistemas de información</p>
            <Buttons textoButton={textButtons}></Buttons>
            <hr></hr>
            <h3>SENA</h3>
            <p>Técnico de sistemas</p>
            <Buttons textoButton={textButtons}></Buttons>
            <hr></hr>
            <h3>Certificados</h3>
            <p>Cuento con varios certiciados emitidos por entidades educativas que mejoran mis habilidades.</p>
            <Buttons textoButton={textButtons}></Buttons>
        </div>
    </div>
    );
}

export {Tarjet};