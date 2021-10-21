import React, {useState} from "react";

const Calculator = () => {

    const portaArea = 1.52;
    const [wall1, setWall1] = useState([]);
    const [val1, setVall1] = useState(0);
    const [area1, setArea1] = useState(0);
    const [porta, setPorta] = useState(false);

    // Salvar os dois valores da parede
    const handleClick = (val) => { 
        // convertendo a string em number
        wall1.push(parseFloat(val));
        console.log(wall1);
        return setWall1(wall1);
    }

    // Calcular area da parede
    const AreaCalculator = (wall) => {
        const result = wall.reduce((acc,curr) => acc * curr)
        if (porta === true) {
           const resultTotal =  result - (portaArea);
           console.log(resultTotal);
           return setArea1(resultTotal);
        }
        console.log(result);
        return setArea1(result);
    };

    return (
        <div>
            <label htmlFor=""> largura da primeira parede</label>
            <input type="number" onChange={event => setVall1(event.target.value)} />
            <label htmlFor=""> altura da primeira parede</label>
            <input type="number" onChange={event => setVall1(event.target.value)} />
            <button type="button" onClick={() => handleClick(val1)}>
                Click
            </button>
            <button type="button" onClick={() => AreaCalculator(wall1)}>
                Calcule
            </button>
            {/* <label>Existe porta nessa parede?</label>
            <input type="checkbox" name="porta" id="" value={porta} onClick= {() => setPorta(!porta)} /> */}
        </div>
    );
};

export default Calculator;