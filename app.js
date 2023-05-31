// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (dollar) => {
    const exChangeRate = oneEuroIs["JPY"] / oneEuroIs["USD"];
    return dollar * exChangeRate;
};

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs["USD"];
}


const fromYenToPound = (yen) => {
    const exChangeRate = oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return yen * exChangeRate;
}

console.log(fromYenToPound(8953));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

