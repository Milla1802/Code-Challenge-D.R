import React, {useState} from "react";

const WallsCalculator = () => {

    // Salvo medias e área total parede 1
    const [wall1, setWall1] = useState([]);
    const [area1, setArea1] = useState(0);

    /* // Salvo medias e área total parede 2
    const [wall2, setWall2] = useState([]);
    const [area2, setArea2] = useState(0);

    // Salvo medias e área total parede 3
    const [wall3, setWall3] = useState([]);
    const [area3, setArea3] = useState(0);

    // Salvo medias e área total parede 4
    const [wall4, setWall4] = useState([]);
    const [area4, setArea4] = useState(0);

    */

    // Salvar os dois valores da parede
    const handleClick = () => { 
       console.log(wall1);
    }

    // Calcular area da parede
    const AreaCalculator = (wall) => {
        const result = wall.reduce((acc,curr) => acc * curr)
        return setArea1(result);
    };

    const handleChange = (e) => {
        const {value} = e.target;
        if(value !== ""){
        wall1.push(parseFloat(value));
        return setWall1(wall1);
        }
        return console.log("NaN");
    }

    return (
        <div>
            <label htmlFor=""> largura da primeira parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <label htmlFor=""> altura da primeira parede</label>
            <input type="number" onChange={event => handleChange(event)} />
            <button type="button" onClick={() => handleClick()}>
                Click
            </button>
            <button type="button" onClick={() => AreaCalculator(wall1)}>
                Calcule,
                {area1}
            </button>

            {/* <label>Existe porta nessa parede?</label>
            <input type="checkbox" name="porta" id="" value={porta} onClick= {() => setPorta(!porta)} /> */}
        </div>
    );
};

export default WallsCalculator;