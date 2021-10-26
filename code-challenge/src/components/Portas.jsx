import React, { useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Portas = () => {

    // Área padrão de cada porta
    const doorSize = 1.52;
    
    const {areaDoors, setAreaDoors} = useContext(CalcContext);

    const [numDoors, setNumDoors] = useState(0);


    const handleChange = (e) => {
        const { value } = e.target;
        const result = value * doorSize;
        return setNumDoors(Math.round(result * 100)/ 100);
    };

    return (
        <main>
             <div className="walls_card">
            <label htmlFor="">Quantas postas existe nesse cômodo?</label>
            <input type="text" name="portas" id="" onChange= { (e) => handleChange(e) } />
            <button className="button-wall" type="submit" onClick={ () =>  setAreaDoors(numDoors) } >
                Adicionar
                { areaDoors } {/* Temporário */}
            </button>
            </div>
        </main>
    );
};

export default Portas;