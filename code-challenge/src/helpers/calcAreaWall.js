// Realiza o calculo da área de uma parede
const calcAreaWall = (wall,setArea) => {
    const wallArray = Object.values(wall);
    const result = wallArray.reduce((acc,curr) => acc * curr)
    return setArea(Math.round(result * 100)/ 100);
}

export default calcAreaWall;