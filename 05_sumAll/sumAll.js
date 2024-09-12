const sumAll = function(num1, num2) {
    let suma = 0;
    if (num1 > num2) {
        [num1, num2] = [num2, num1];
    }
    if ((Number.isInteger(num1) && Number.isInteger(num2)) && (num1 >= 0 && num2 >= 0)) {
        for (let i = num1; i <= num2; i++) {
            //console.log(i);
            suma = suma + i;
        }
        return suma;
    } else {
        return "ERROR";
    }
    
};

console.log(sumAll(25 ,4));

// Do not edit below this line
module.exports = sumAll;
