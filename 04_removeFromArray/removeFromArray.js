const removeFromArray = function(array) {
    for (let index = 1; index < arguments.length; index++) {
        //console.log(arguments[index]);
        array.forEach(element => {
            if (element == arguments[index]) {
                array = array.toSpliced(array.indexOf(arguments[index]), 1);
            }
        });
    
    }
    
    return array;
};

let array = [1,2,3,4];

console.log(removeFromArray(array, 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
