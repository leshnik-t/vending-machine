const selectCurrencyCoins = (currency) => {
    const coinsArray = [];
    switch(currency) {
        case 'EUR' : {
            coinsArray.push([200, 100, 50, 20, 10, 5, 2 , 1]);
            break;
        }
        default: {
            coinsArray.push([200, 100, 50, 20, 10, 5, 2 , 1]);
            break;
        }
    }

    return coinsArray;
}

export const amountToCoins = (amount, currency) => {

    let amountTotal = parseFloat(amount) * 100;

    const [coinsArray] = selectCurrencyCoins(currency);
    
    const coinsMap = new Map();

    for (let i = 0; i < coinsArray.length; i++) {
        if (!coinsMap.has(coinsArray[i])) {
            coinsMap.set(coinsArray[i], 0)
        }

        if (amountTotal >= coinsArray[i]) {
            amountTotal = amountTotal - coinsArray[i];
            coinsMap.set(coinsArray[i], coinsMap.get(coinsArray[i]) + 1);
            i--;
        }
    }

    return [...coinsMap.entries()];
}
