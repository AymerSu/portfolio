import React from 'react';
import { useLocation } from 'react-router-dom';
import { ImgDegree } from '../components/ImgDegre';

function AcademicDegree() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const imagePath = searchParams.get('imagePath') || '/CertAnalisisydesarrollo SENA_page-0001.jpg';
    console.log('this is imagePath in page -> ', imagePath);
    return (
        <React.Fragment>
            <h1>Grado</h1>
            <ImgDegree path={imagePath} />
        </React.Fragment>
    );
}

export { AcademicDegree };
