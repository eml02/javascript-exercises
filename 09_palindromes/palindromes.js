const palindromes = function (string) {
    const allowedChara = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter((character) => allowedChara.includes(character))
        .join('');
    const reversedString = cleanedString.split("").reverse().join("");
    return (cleanedString === reversedString);
    


};
console.log(palindromes("som3os"));

// Do not edit below this line
module.exports = palindromes;
