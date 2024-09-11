const removeFromArray = function(array, value) {
    array.forEach(element => {
        if (element == value) {
            array = array.toSpliced(array.indexOf(element), 1);
        }
    });
    return array;
};

let array = [1,2,3,4];

console.log(removeFromArray(array, 3));

// Do not edit below this line
module.exports = removeFromArray;
