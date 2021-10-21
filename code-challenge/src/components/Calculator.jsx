import React, {useState} from "react";

const Calculator = () => {

    const [wall1, setWall1] = useState([]);
    const [val1, setVall1] = useState(0);
    const [area1, setArea1] = useState(0);

    // Salvar os dois valores da parede
    const handleClick = (val) => { 
        // convertendo a string em number
        wall1.push(parseFloat(val));
        console.log(wall1);
        return setWall1(wall1);
    }

    

    return (
        <div>
            <label htmlFor=""> largura da primeira parede</label>
            <input type="number" onChange={event => setVall1(event.target.value)} />
            <label htmlFor=""> altura da primeira parede</label>
            <input type="number" onChange={event => setVall1(event.target.value)} />
            <button type="button" onClick={() => handleClick(val1)}>
                Click
            </button>
        </div>
    );
};

export default Calculator;