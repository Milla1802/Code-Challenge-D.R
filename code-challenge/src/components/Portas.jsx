import React, { useState, useContext} from "react";
// import Select from 'react-select';
import CalcContext from "../context/CalcContext";

const Portas = () => {

    // Área padrão de cada porta
    const doorSize = 1.52;
    
    const {areaDoors, setAreaDoors} = useContext(CalcContext);

    const [numDoors, setNumDoors] = useState(0);


    const handleChange = (e) => {
        const { value } = e.target;
        const result = value * doorSize;
        return setNumDoors(result);
    };

    return (
        <main>
            <label htmlFor="">Quantas postas existe nesse cômodo?</label>
            <input type="text" name="portas" id="" onChange= { (e) => handleChange(e) } />
            <button type="submit" onClick={ () =>  setAreaDoors(numDoors) } >
                Adicionar
                { areaDoors } {/* Temporário */}
            </button>
        </main>
    );
};

export default Portas;