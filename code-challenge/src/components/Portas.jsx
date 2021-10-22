import React, { useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Portas = () => {

    // Área padrão de cada porta
    const doorSize = 1.52;

    const [numDoors, setNumDoors] = useState(0);

    const {areaDoors, setAreaDoors} = useContext(CalcContext);

    const handleChange = (e) => {
        const { value } = e.target;
        const result = value * doorSize;
        return setNumDoors(result);
    };



    return (
        <main>
            <label htmlFor="">Quantas postas existe nesse cômodo?</label>
            <input type="number" name="portas" id="" onChange= { (e) => handleChange(e) } />
            <button type="button" onClick={ () =>  setAreaDoors(numDoors)} >
                Adicionar
                { areaDoors } {/* Temporário */}
            </button>
        </main>
    );
};

export default Portas;