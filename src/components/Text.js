import { Image } from './Image';
import './../styles/Text.css';

function Text(props) {
    return (
    <div className="contenedor-text-img">
        <p>{props.text}</p>
        <Image></Image>
    </div>
    )
}

export { Text };