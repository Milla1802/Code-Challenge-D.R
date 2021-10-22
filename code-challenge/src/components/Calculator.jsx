import React, {useContext, useEffect} from "react";
import CalcContext from "../context/CalcContext";

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
        console.log(litrosRoom);
    })




   const renderSwitch = (litrosRoom) => {
       switch (litrosRoom) {
           case  (litrosRoom <= 0.5):
               return 'Um lata de 0,5l de tinta';  
            case (litrosRoom <= 2.5):
                return 'Um lata de 2,5l de tinta';
            case (litrosRoom <= 3.6):
                return 'Um lata de 3,6l de tinta';         
           default: 
                return 'Uma lata de 18l de tinta';
       }
   }

    return (
        <main>
            <div>
                Seu cômodo têm {wallsArea} m² e precisa de {litrosRoom} L de tinta.
            </div>
            <div><p>{renderSwitch(litrosRoom)}</p></div>
                
        </main>
    );
};

export default Calculator;