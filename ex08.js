function calculate(n1, n2, operation) {
	operation = n1 + n2;
  return operation;
}
function addition(n1, n2) {
	return n1 + n2;
}
function subtraction(n1, n2) {
	return n1 - n2;
}

console.log(calculate(6, 1, addition)); // Résultat attendu: 1
console.log(calculate(0, 10, subtraction)); // Résultat attendu: -10