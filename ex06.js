function getReduction(price, age) {
	if ( age <= 5 ) {
      return 0;
    } else if ( 5 <= age <= 18 ) {
      return price - ((price*50)/100) ;
    } else if ( 18 < age <= 25 ) {
      return price - ((price*30)/100);
    } else if ( age > 25 ) {
      return price;
    }
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 300));
