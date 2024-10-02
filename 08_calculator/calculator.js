const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(array) {
  return array.reduce((sumatoria, valorActual) => sumatoria + valorActual, 0);
};

const multiply = function(array) {
  return array.reduce((acumulador, valorActual) => acumulador * valorActual, 1);
};

const power = function(base, exp) {
  return Math.pow(base, exp);
	
};

const factorial = function(numero) {
  if ((numero == 0) || (numero == 1)) {
    return 1;
  } else {
    return factorial(numero - 1) * numero;
  }
	
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
