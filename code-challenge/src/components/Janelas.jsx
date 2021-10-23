import React, { useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Janelas = () => {

    const windowSize = 2.4;

    const [numWindowns, setNumWindowns] = useState(0);

    const { areaWindows, setAreaWindows } = useContext(CalcContext);

    const handleChange = (e) => {
        const { value } = e.target;
        const result = value * windowSize;
        return setNumWindowns(result);
    };

    return (
        <main>
            <label htmlFor="">Quantas janelas existe nesse cômodo?</label>
            <input type="number" name="portas" id="" onChange={ (e) => handleChange(e) } />
            
            <button type="button" onClick={ () =>  setAreaWindows(numWindowns)} >
                Adicionar
                { areaWindows } {/* Temporário */}
            </button>
        </main>
    );
};

export default Janelas;