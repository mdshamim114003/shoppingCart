const RandomNumber = () => {
    return (
        parseInt(Math.random() * new Date().getTime())
    );
};

export default RandomNumber;