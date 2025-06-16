const removeFromArray = function(array, ...remove) {
    return array.filter(item => !remove.includes(item));

    /*
    // verbose version
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];

        // Check if the current item is NOT in the remove array
        if (!remove.includes(item)) {
            result.push(item); // Keep the item
        }
    }
    return result;
    */
    

/*
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
  */


};

// Do not edit below this line
module.exports = removeFromArray;
