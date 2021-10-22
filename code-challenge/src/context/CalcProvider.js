import React, {useState} from "react";

import CalcContext from "./CalcContext";

function CalcProvider({children}) {
    const [area1, setArea1] = useState(0);
    const [area2, setArea2] = useState(0);
    const [area3, setArea3] = useState(0);
    const [area4, setArea4] = useState(0);

    const [areaDoors, setAreaDoors] = useState(0);
    const [areaWindows, setAreaWindows] = useState(0);

    const [wallsArea, setWallsArea] = useState(0);
    const [litrosRoom, setLitrosRoom] = useState(0);

    // Função para somar todas as áreas das paredes
   /*  const WallsTotal = (val1, val2, val3, val4) => {
        const total = val1 + val2 + val3 + val4;
        return setWallsArea(total);
    }; */

    // Função da área total do cômodo dividido por 5m², quantidade que 1l de tinta faz
    const TotalRoom = (walls, doors, windows) => {
        const result = (walls - (doors + windows)) / 5
        return setLitrosRoom(result);
    }; 

    const contextValues = {
        area1, setArea1,
        area2, setArea2,
        area3, setArea3,
        area4, setArea4,
        wallsArea, /* WallsTotal */
        areaDoors, setAreaDoors,
        areaWindows, setAreaWindows,
        litrosRoom, TotalRoom,setWallsArea
    };

    return(
        <main>
            <CalcContext.Provider value={ contextValues }>
                {children}
            </CalcContext.Provider>
        </main>
    );
};

export default CalcProvider;