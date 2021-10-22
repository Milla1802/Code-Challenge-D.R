import React, {useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Wall3 = () => {

    // Estado local só para pegar as duas medidas
    const [wall3, setWall3] = useState([]);

    // Salvo no state global a áreal total da parede
    const { area3, setArea3, } = useContext(CalcContext)

    // Salva as medidas no array
    const handleChange = (e) => {
        const {value} = e.target;
        if(value !== ""){
        wall3.push(parseFloat(value));
        return setWall3(wall3);
        }
        return;
    }

    // Calcular area da parede
    const AreaCalculator = (wall) => {
        const result = wall.reduce((acc,curr) => acc * curr)
        return setArea3(result);
    };

    return (
        <div>
            <label htmlFor=""> largura da terceira parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <label htmlFor=""> altura da terceira parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <button type="button" onClick={() => AreaCalculator(wall3)}>
                Calcule,
                {area3} {/* Temporário */}
            </button>
        </div>
    );
};

export default Wall3;