const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    // Compare the cleaned string to its reverse
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
