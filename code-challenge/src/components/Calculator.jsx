import React, {useContext, useEffect} from "react";
import CalcContext from "../context/CalcContext";
import renderCases from "../helpers/renderCases";

const Calculator = () => {

    const {
        area1, area2, area3, area4,
        areaDoors, areaWindows, wallsArea,
        litrosRoom, TotalRoom,setWallsArea
    } = useContext(CalcContext);

    // Função que soma todas as areas das paredes 
    const WallsTotal = () => {
        const total =  area1 + area2 + area3 + area4;
        return setWallsArea(total);
    };
    
    // Função que retorna o TotalRoom com quantos litros de tinta precisa 
    const calcLitros = () => {
        WallsTotal();
        return TotalRoom(wallsArea,areaDoors, areaWindows)
    }

    // Calcula a quantidade de litros sempre que componete é renderizado
    useEffect(() => {
        calcLitros()
    })

    // Arredondar para duas casas decimais
    const LitrosRoom = Math.round(litrosRoom * 100)/ 100;

    return (
        <main className="container_result">
            <div>
                <p>Seu cômodo têm {wallsArea}m² e precisa de {LitrosRoom}L de tinta.</p>
            </div>
            <div><p>{renderCases(LitrosRoom)}</p></div>
                
        </main>
    );
};

export default Calculator;