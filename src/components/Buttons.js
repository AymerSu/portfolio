import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/Buttons.css';

function Buttons({ textoButton, ruteUrl }) {
    console.log('this is path -> ', ruteUrl);
    return (
        <button className="button-black">
            <Link to={`/degree?imagePath=${encodeURIComponent(ruteUrl)}`}>
                {textoButton}
            </Link>
        </button>
    );
}

export { Buttons };
