import './../styles/Headers.css';
import { Link } from 'react-router-dom';

function Headers(){
    return (
        <header>
            <nav>
                <ul>
                    <li className="home"><Link to="/">Aymer Yesid Cruz Suescun</Link></li>
                    <li className="menu-item"><Link to="/proyectos">Proyectos</Link></li>
                    <li className="menu-item"><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export {Headers};
