import React, {useState, useContext} from "react";
import CalcContext from "../context/CalcContext";

const Wall1 = () => {

    // Estado local 
    const [wall1, setWall1] = useState([]);
    const [err, setErr] = useState(false);
    //const [message, setMessage] = useState('');


    // Salvo no state global a áreal total da parede
    const { area1, setArea1, setAltura1 } = useContext(CalcContext)

    // Salva as medidas no array
    const handleChange = (e) => {
        const {value, name} = e.target;
        if(value >= 1 && value < 15 && value !== "") {
            if(name === 'altura') {
                setAltura1(parseFloat(value));
                wall1.push(parseFloat(value));
                return setWall1(wall1);
            }
                wall1.push(parseFloat(value));
                return setWall1(wall1);
        } 
        if(value === "" ) {
            console.log('vazio');
            return setErr(false);
        }
        console.log('Caiu aqui');
        return setErr(!err);
    }

    // Calcular area da parede
    const AreaCalculator = (wall) => {
        const total = wall.reduce((acc,curr) => acc * curr)
        const result = Math.round(total * 100)/ 100;
        return setArea1(result);
    };

    return (
        <div>
            <label htmlFor=""> largura da primeira parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <label htmlFor=""> altura da primeira parede</label>
            <input type="number" name="altura" onChange={event => handleChange(event)} />
            {(err) ? <p>Nenhuma parede pode ter menos de 1 metro nem mais de 15 metros</p> : ''}
            <button type="button" onClick={() => AreaCalculator(wall1)}>
                Calcule,
                {area1} {/* Temporário */}
            </button>
        </div>
    );
};

export default Wall1;