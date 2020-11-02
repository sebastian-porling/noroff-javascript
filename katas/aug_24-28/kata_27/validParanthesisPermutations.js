#!/usr/local/bin/node

/**
 * @returns the entered number or 3 if user input is empty or invalid
 */
const getUserInput = () => parseInt(process.argv[2]) || 3;

/**
 * Main executable method
 * You can enter the amount of pairs
 * to generate by givin an argument in console.
 * 
 * Ex.  node validParanthesisPermutations 6
 *      node validParanthesisPermutations <number>
 *      ./validParanthesisPermuations <number>
 */
(function main() {
    const pairs = getUserInput();
    result = findAllValidParanthesis(pairs);
    console.log(result);
})();

/**
 * Finds all valid paranthesis pairs combinations
 * @param {Integer} pairs Number of paranthesis pairs
 */
function findAllValidParanthesis(pairs) {
    const isZero = (...args) => args.every((arg) => arg === 0);
    const result = [];

    /**
     * Generates each valid combination of paranthesis
     * and adds it to the global array;
     * @param {Integer} open Number of closed paranthesis
     * @param {Integer} close Number of closed paranthesis
     * @param {String} current Current paranthesis group
     */
    (function generateParanthesis(open, close, current) {
        if (open > close) return;
        if (isZero(open, close)) result.push(current);
        if (open > 0) generateParanthesis(open - 1, close, current + "(");
        if (close > 0) generateParanthesis(open, close - 1, current + ")");
    })(pairs, pairs, "");

    return result;
}

