const reverseString = function(str) {

    console.log("Original:", str);

    /*
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");
    */

    // Simplified above
    let reversed = str.split("").reverse().join("");

    console.log("Reversed:", reversed)
    
    return reversed;
    //return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
