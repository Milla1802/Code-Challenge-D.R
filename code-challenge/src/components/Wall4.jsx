import React, {useState, useContext} from "react";
import CalcContext from "../context/CalcContext";
import calcAreaWall from "../helpers/calcAreaWall";

const Wall4 = () => {

    // Estado local só para pegar as duas medidas
    const [wall4, setWall4] = useState([]);
    const [err, setErr] = useState(false);
    const [err2, setErr2] = useState(false);

    // Salvo no state global a áreal total da parede
    const { setArea4 } = useContext(CalcContext)

    // Valida as medidas e salva a area da parede
    const onChangeWalls = (e) => {
        const { name, value } = e.target;
        const numValue = Number(value);
        if(name === "largura") {
            if(value >= 1 && value <= 15) {
                setErr(false)
                return setWall4({ ...wall4, [name]:numValue})
            }
            return setErr(true);

        }
        if(name === "altura") {
            if(value >= 2.20 && value <= 15) {
                setErr2(false)
                return setWall4({ ...wall4, [name]:numValue})
            }
            return setErr2(true);

        }

    };

    return (
        <div className="container">
             <div className="walls_card">
                <label htmlFor="largura"> Quarta Largura</label>
                <input type="number" id="largura" name="largura" onChange={onChangeWalls} />
                <label htmlFor="altura"> Quarta Altura</label>
                <input type="number" id="altura" name="altura" onChange={onChangeWalls} />
                {(err) ? <p>Nenhuma parede pode ser menor que 1 metro nem maior que 15m</p> : ''}
                {(err2) ? <p>As paredes devem ter altura mínima de 2,20 e máxima de 15m </p> : ''}
                <button className="button-wall" type="button" onClick={() => calcAreaWall(wall4, setArea4)}>
                    Adicionar
                </button>
            </div>
        </div>
    );
};

export default Wall4;