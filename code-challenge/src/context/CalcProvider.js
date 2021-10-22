import React, {useState} from "react";

import CalcContext from "./CalcContext";

function CalcProvider({children}) {
    const [area1, setArea1] = useState(0);
    const [area2, setArea2] = useState(0);
    const [area3, setArea3] = useState(0);
    const [area4, setArea4] = useState(0);

    const [areaDoors, setAreaDoors] = useState(0);
    const [areaWindows, setAreaWindows] = useState(0);

    const [wallsTotalArea, setWallsTotalArea] = useState(0);

    // Função para somar todas as áreas das paredes
    const WallsTotal = (val1, val2, val3, val4) => {
        const total = val1 + val2 + val3 + val4;
        return setWallsTotalArea(total);
    };

    const contextValues = {
        area1, setArea1,
        area2, setArea2,
        area3, setArea3,
        area4, setArea4,
        wallsTotalArea, WallsTotal,
        areaDoors, setAreaDoors,
        areaWindows, setAreaWindows,
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