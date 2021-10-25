import React, {useContext, useEffect} from "react";
import CalcContext from "../context/CalcContext";
import renderCases from "../helpers/renderCases";

const Calculator = () => {

    const {
        area1, area2, area3, area4,
        areaDoors, areaWindows, wallsArea,
        litrosRoom, TotalRoom,setWallsArea
    } = useContext(CalcContext);

    // Função para chamar a função que soma todas as areas da parede WallsTotal
    // Função que retorna o TotalRoom com quantos litros de tinta precisa 

    const WallsTotal = () => {
        const total =  area1 + area2 + area3 + area4;
        return setWallsArea(total);
    };

    const calcLitros = () => {
        WallsTotal();
        return TotalRoom(wallsArea,areaDoors, areaWindows)
    }

    useEffect(() => {
        calcLitros()
    })

    // Arredondar para duas casas decimais
    const LitrosRoom = Math.round(litrosRoom * 100)/ 100;


    //Fução de cases pode ser colocada em um Middleware*************
   /* const renderCases = (litros) => {
        if(litros <= 0.5) {
           return 'Uma lata de 0,5l é suficiente';
        }
       if(litros > 0.5 && litros < 2.5) {
           const latas = litros / 0.5;
           return `Será necessário ${Math.ceil(latas)} latas de 0,5L para toda a área`;
        }
       if(litros >= 2.5 && litros < 3.6) {
            const latas = litros / 2.5;
            return `Será necessário ${Math.ceil(latas)} latas de 2,5L para toda a área`;
        }
        if (litros >= 3.6 && litros < 18) {
            const latas = litros / 3.6;
            return `Será necessário ${Math.ceil(latas)} latas de 3,6L para toda a área`;
        }
        else {
            const latas = litros / 18
            return `Será necessário ${Math.ceil(latas)} latas de 18L para toda a área`;
        }

   } */

    return (
        <main>
            <div>
                Seu cômodo têm {wallsArea}m² e precisa de {LitrosRoom}L de tinta.
            </div>
            <div><p>{renderCases(LitrosRoom)}</p></div>
                
        </main>
    );
};

export default Calculator;