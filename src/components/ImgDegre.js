function ImgDegree({ path }) {
    return (
        <img 
            src={process.env.PUBLIC_URL + path} 
            alt="Degree"
            className="imagesDegree"
        />
    );
}

export { ImgDegree };
