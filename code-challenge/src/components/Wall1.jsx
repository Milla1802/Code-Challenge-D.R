import React, {useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Wall1 = () => {

    // Estado local 
    const [wall1, setWall1] = useState([]);
    //const [err, setErr] = useState(false);

    // Salvo no state global a áreal total da parede
    const { area1, setArea1, } = useContext(CalcContext)

    // Salva as medidas no array
    const handleChange = (e) => {
        const {value} = e.target;
        if(value < 1 || value > 15) {

        }
        if(value !== ""){
        wall1.push(parseFloat(value));
        return setWall1(wall1);
        }
        return;
    }

    // Calcular area da parede
    const AreaCalculator = (wall) => {
        const result = wall.reduce((acc,curr) => acc * curr)
        return setArea1(result);
    };

    return (
        <div>
            <label htmlFor=""> largura da primeira parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <label htmlFor=""> altura da primeira parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <button type="button" onClick={() => AreaCalculator(wall1)}>
                Calcule,
                {area1} {/* Temporário */}
            </button>
        </div>
    );
};

export default Wall1;