const sum = (x, y) => x + y;
const lesserThan = (v) => v < 10000; 

function main() {
    const testData = [1, 2, 3];
    const highTestData = [10000, 500, 20000];
    const firstSumResult = testData.reduce(sum);
    const filterSumResult = [...testData, ...highTestData]
                                .filter(lesserThan)
                                .reduce(sum);
    testData.push(...highTestData.filter(lesserThan));
    
    console.log("\n**** RESULT ****")
    console.log("Sum: ", firstSumResult);
    console.log("Push lesser than 10000: ", testData);
    console.log("Sum lesser than 10000: ", filterSumResult)
}

main();