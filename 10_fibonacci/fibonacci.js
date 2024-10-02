const fibonacci = function(numero) {
    if (typeof(numero) === "string") {
        numero = parseInt(numero);
    }
    if (numero < 0) {
        return "OOPS";
    } else if (numero < 2) {
        return numero;
    } else {
        return fibonacci(numero -1) + fibonacci(numero - 2);
    }
};

//console.log(fibonacci(19));

// Do not edit below this line
module.exports = fibonacci;
