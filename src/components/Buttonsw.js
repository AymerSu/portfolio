import { FaSquareGithub } from "react-icons/fa6";
import './../styles/Buttonsw.css';

function Buttonsw({textoButton, urlButton}) {
    return (
        <button class="button-white"><a href={urlButton} target="_blank"><FaSquareGithub color="black" size={20}/> {textoButton}</a></button>
    )
}

export {Buttonsw}