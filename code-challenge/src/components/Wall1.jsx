import React, {useState, useContext} from "react";
import CalcContext from "../context/CalcContext";
import calcAreaWall from "../helpers/calcAreaWall";

const Wall1 = () => {

    const inicialValue = {
        altura: 0,
        largura: 0,
    }

    // Estado local 
    const [wall1, setWall1] = useState(inicialValue);
    const [err, setErr] = useState(false);
    const [err2, setErr2] = useState(false);
    const [disabled, setDisabled] = useState(true);

    // Salvo no state global a áreal total da parede
    const { area1, setArea1 } = useContext(CalcContext);

    // Valida as medidas e salva a area da parede
    const onChangeWalls = (e) => {
        const { name, value } = e.target;
        const numValue = Number(value);
        if(name === "largura") {
            if(value >= 1 && value <= 15) {
                setErr(false);
                return setWall1({ ...wall1, [name]:numValue})
            }
            return setErr(true);

        }
        if(name === "altura") {
            if(value >= 2.20 && value <= 15) {
                setErr2(false);
                setDisabled(false);
                return setWall1({ ...wall1, [name]:numValue})
            }
            setDisabled(true);
            return setErr2(true);

        }

    }

    return (
        <div className="container">
            <div className="walls_card">
            <label htmlFor="largura"> Primeira Largura</label>
            <input type="number" id="largura" name="largura" onChange={onChangeWalls} />
            <label htmlFor="altura">Primeira Altura</label>
            <input type="number" id="altura" name="altura" onChange={onChangeWalls} />
        
            {(err) ? <p>Nenhuma parede pode ser menor que 1 metro nem maior que 15m</p> : ''}
            {(err2) ? <p>As paredes devem ter altura mínima de 2,20 e máxima de 15m </p> : ''}
            <button className="button-wall" type="button" disabled={disabled} onClick={() => calcAreaWall(wall1, setArea1)}>
                Adicionar
            </button>
            <p id="areas">{`Área total: ${area1}`}</p>
            </div>
        </div>
    );
};

export default Wall1;