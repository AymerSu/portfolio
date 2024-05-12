import './../styles/Tarjetpr.css';
import { Buttonsw } from './Buttonsw';
import { Imagesp } from './Imagesp';

const textB = "Repositorio"

function Tarjetpr({titleR, textDeP, urlR, pathGif}) {
    return (
        <div class="container-tarjet-black">
            <div class="tarjeta-black">
                <h3>{titleR}</h3>
                <p>{textDeP}</p>
                <Imagesp 
                path={pathGif}
                />
                <Buttonsw 
                    textoButton={textB}
                    urlButton={urlR}
                />
            </div>
        </div>
    ); 
}

export { Tarjetpr }