import React, { useState, useContext} from "react";
// import Select from 'react-select';
import CalcContext from "../context/CalcContext";

const Portas = () => {

    // Área padrão de cada porta
    const doorSize = 1.52;
    
    const {areaDoors, setAreaDoors, altura1} = useContext(CalcContext);

    const [numDoors, setNumDoors] = useState(0);
    const [heigthWall, setheigthWall] = useState(false);


    const handleChange = (e) => {
        const { value } = e.target;
        const result = value * doorSize;
        if(altura1 < 2.20){
            return setheigthWall(true);
        }
        setheigthWall(false)
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
            { (heigthWall) ?
            <p>A altura das paredes deve ser no min 30cm mais alta que as portas</p>
            : console.log(heigthWall) }
        </main>
    );
};

export default Portas;