function convertToRoman(num) {
    const obj = {
        0: ['M', 1000], 
        1: ['D', 500], 
        2: ['C', 100], 
        3: ['L', 50], 
        4: ['X', 10], 
        5: ['V', 5], 
        6: ['I', 1]
    };

    // Array of Roman symbols and their values
    const romanSymbols = Object.values(obj);
    let result = ''; // To store the resulting Roman numeral

    // Iterate through each Roman numeral symbol
    for (let i = 0; i < romanSymbols.length; i++) {
        const [symbol, value] = romanSymbols[i];
        
        // Add the symbol as many times as it fits into `num`
        while (num >= value) {
            result += symbol;
            num -= value;
        }

        // Handle subtractive combinations (like IV, IX, etc.)
        if (i % 2 === 0 && i + 2 < romanSymbols.length) {
            const [nextSymbol, nextValue] = romanSymbols[i + 2];
            
            // Check if the subtractive combination applies
            if (num >= value - nextValue) {
                result += nextSymbol + symbol;
                num -= value - nextValue;
            }
        }
    }
    return result; // Return the final Roman numeral
}

// Example test cases
console.log(convertToRoman(14));    // Output: XIV
console.log(convertToRoman(798));   // Output: DCCXCVIII
console.log(convertToRoman(36));    // Output: XXXVI

// Do not edit below this line
module.exports = convertToRoman;
