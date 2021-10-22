import React, {useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Wall2 = () => {

    // Estado local só para pegar as duas medidas
    const [wall2, setWall2] = useState([]);

    // Salvo no state global a áreal total da parede
    const { area2, setArea2, } = useContext(CalcContext)

    // Salva as medidas no array
    const handleChange = (e) => {
        const {value} = e.target;
        if(value !== ""){
        wall2.push(parseFloat(value));
        return setWall2(wall2);
        }
        return;
    }

    // Calcular area da parede
    const AreaCalculator = (wall) => {
        const result = wall.reduce((acc,curr) => acc * curr)
        return setArea2(result);
    };

    return (
        <div>
            <label htmlFor=""> largura da segunda parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <label htmlFor=""> altura da segunda parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <button type="button" onClick={() => AreaCalculator(wall2)}>
                Calcule,
                {area2} {/* Temporário */}
            </button>
        </div>
    );
};

export default Wall2;