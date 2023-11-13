export const amountToCoins = (amount) => {

    let amountTotal = parseFloat(amount) * 100;

    const coinsArray = [200, 100, 50, 20, 10, 5, 2 , 1];
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

    return coinsMap;
  }

  export const coinsToAmount = (coinsMap) => {
    let amountTotal = 0;

    for (const key of coinsMap.keys()) {
        amountTotal = amountTotal + parseInt(key) * parseInt(coinsMap.get(key));
    }

    return (amountTotal / 100).toFixed(2);
  }
