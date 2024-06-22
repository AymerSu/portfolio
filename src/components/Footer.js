import './../styles/Footer.css';
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer>
            <nav>
                <p>Página desarrollada en React</p>
                <ul>
                    <li><a href='https://www.linkedin.com/in/aymer-yesid-cruz-suescun-4502342bb/' target="_blank"><FaLinkedin color="white" size={20}/></a></li>
                    <li><a href='https://github.com/AymerSu' target='_blank'><FaSquareGithub color="white" size={20}/></a></li>
                </ul>
            </nav>
        </footer>
    );
}

export { Footer };