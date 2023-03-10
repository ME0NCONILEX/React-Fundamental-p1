import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom/client";

function CarsDrill() {
    const [car, setCar] = useState({
        brand: "Volvo",
        model: "V60",
        year: "2011",
        color: "blue"
    });

    const updateColor = () => {
        setCar(previousState => {
            return { ...previousState, color: "red" , year: "2001", model: "V40"}
        });
    }

    function updateYear() {

    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>
                It is a {car.color} {car.model} from {car.year}.
            </p>
            <button
                type="button"
                onClick={updateColor}


            >My old Car</button>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarsDrill />);

export default CarsDrill;