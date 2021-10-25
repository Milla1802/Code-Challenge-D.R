const renderCases = (litros) => {
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

}

export default renderCases;