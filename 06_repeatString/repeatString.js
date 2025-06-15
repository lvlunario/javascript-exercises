const repeatString = function(string, times) {
    if (times < 0) return 'ERROR';

    let result = '';
    while (times > 0) {
        result += string;
        times--;
    }
    console.log(`Result: "${result}"`);
    return result;
};

// Do not edit below this line
module.exports = repeatString;
