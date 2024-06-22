import './../styles/Tarjet.css';
import { Buttons } from './Buttons';

const textButtons = "Detallar"; 

function Tarjet() {
    return (
    <div className="container-tarjet">
        <div className="tarjeta">
            <h1>Experiencia</h1>
            <h3>Banco Davivienda</h3>
            <p>Desarrollador Junior incorporado al Bootcamp TechCamp del banco Davivienda por una duración de 6 meses</p>
            
            <hr></hr>
            <h3>Ediciones Gamma S.A.</h3>
            <p>Analista de sistemas en la coordinación de sistemas, automatizando procesos de diferentes áreas por una duración de 6 años.</p>
            
        </div>
        
        <div className="tarjeta">
            <h1>Estudios</h1>
            <h3>SENA</h3>
            <p>Tecnólogo en Análisis y desarrollo de sistemas de información</p>
            <Buttons
                    textoButton={textButtons}
                    ruteUrl={'/CertAnalisisydesarrollo SENA_page-0001.jpg'}
                />
            <hr></hr>
            <h3>SENA</h3>
            <p>Técnico de sistemas</p>
            <Buttons
                    textoButton={textButtons}
                    ruteUrl={'/CertSistemas SENA_page-0001.jpg'}
                />
            <hr></hr>
            <h3>Certificados</h3>
            <p>Cuento con varios certificados emitidos por entidades educativas que mejoran mis habilidades.</p>
            
        </div>
    </div>
    );
}

export {Tarjet};