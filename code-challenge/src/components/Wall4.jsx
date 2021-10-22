import React, {useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Wall4 = () => {

    // Estado local só para pegar as duas medidas
    const [wall4, setWall4] = useState([]);

    // Salvo no state global a áreal total da parede
    const { area4, setArea4, } = useContext(CalcContext)

    // Salva as medidas no array
    const handleChange = (e) => {
        const {value} = e.target;
        if(value !== ""){
        wall4.push(parseFloat(value));
        return setWall4(wall4);
        }
        return;
    }

    // Calcular area da parede
    const AreaCalculator = (wall) => {
        const result = wall.reduce((acc,curr) => acc * curr)
        return setArea4(result);
    };

    return (
        <div>
            <label htmlFor=""> largura da quarta parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <label htmlFor=""> altura da quarta parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <button type="button" onClick={() => AreaCalculator(wall4)}>
                Calcule,
                {area4} {/* Temporário */}
            </button>
        </div>
    );
};

export default Wall4;