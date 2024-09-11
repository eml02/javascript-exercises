const reverseString = function(string) {
    let reversedString = "";
    for (let index = (string.length - 1); index >= 0; index--) {
        reversedString = reversedString + string[index];
        console.log(string[index]);
    }
    return reversedString;

};

// let reversed = reverseString("blah");
// console.log(reversed);


// Do not edit below this line
module.exports = reverseString;
