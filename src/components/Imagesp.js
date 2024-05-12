import './../styles/Imagesp.css'

function Imagesp({path}) {
    return (
        <img 
        src={process.env.PUBLIC_URL + path} 
        alt="Imagen de proyecto"
        className="images-proj"
    />
    );
}

export { Imagesp }