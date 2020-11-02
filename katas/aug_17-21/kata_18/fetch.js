const fetch = require("node-fetch");

const getCurrency = async function(currency) {
    let res = await fetch(`https://api.exchangeratesapi.io/latest?base=${currency}`)
    let data = await res.json();
    return data;
};

module.exports.getCurrency = getCurrency;