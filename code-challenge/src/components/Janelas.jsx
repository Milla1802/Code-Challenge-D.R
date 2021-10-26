import React, { useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Janelas = () => {

    const windowSize = 2.4;

    const [numWindowns, setNumWindowns] = useState(0);

    const { areaWindows, setAreaWindows } = useContext(CalcContext);

    const handleChange = (e) => {
        const { value } = e.target;
        const result = value * windowSize;
        return setNumWindowns(Math.round(result * 100)/ 100);
    };

    return (
        <main>
            <div className="walls_card">
            <label htmlFor="">Quantas janelas existe nesse cômodo?</label>
            <input type="number" name="portas" id="" onChange={ (e) => handleChange(e) } />
            
            <button className="button-wall" type="button" onClick={ () =>  setAreaWindows(numWindowns)} >
                Adicionar
            </button>
            <p id="areas">{`Área total: ${areaWindows}`}</p>
            </div>
        </main>
    );
};

export default Janelas;