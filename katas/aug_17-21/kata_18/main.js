const API = require('./fetch.js')

async function main() {
    let result = await API.getCurrency('USD')
    console.log(result)
}

main()