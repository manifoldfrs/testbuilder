// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //Assumption: if cardNumber is not a credit card number, prompt the user to enter a credit card number

  switch(true) {
  	case ((cardNumber.startsWith('38') || cardNumber.startsWith('39')) && cardNumber.length === 14) :
  		return 'Diner\'s Club';
  		break;
  	case (cardNumber.startsWith('34') || cardNumber.startsWith('37') && cardNumber.length === 15) :
  		return 'American Express';
  		break;
  	case((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (cardNumber.substring(0,4) === "4903" || cardNumber.substring(0,4) === "4905" || cardNumber.substring(0,4) === "4911" || cardNumber.substring(0,4) === "4936" || cardNumber.substring(0,6) === "564182" || cardNumber.substring(0,6) === "633110" ||cardNumber.substring(0,4) === "6333" || cardNumber.substring(0,4) === "6759")):
  		return 'Switch';
  		break;
	case (cardNumber.startsWith('4') && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) :
		return 'Visa';
		break;
	case ((cardNumber.startsWith('51') || cardNumber.startsWith('52') || cardNumber.startsWith('53') || cardNumber.startsWith('54') || cardNumber.startsWith('55')) && cardNumber.length === 16):
		return 'MasterCard';
		break;
	case((cardNumber.startsWith('6011') || cardNumber.startsWith('644') || cardNumber.startsWith('645') || cardNumber.startsWith('646') || cardNumber.startsWith('647') || cardNumber.startsWith('648') || cardNumber.startsWith('649') || cardNumber.startsWith('65')) && (cardNumber.length === 16 || cardNumber.length === 19)):
		return 'Discover';
		break;
	case((cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('6304')) && (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)):
		return 'Maestro';
		break;
	case(16 <= cardNumber.length <= 19 && (622126 <= Number(cardNumber.substring(0, 6)) <= 622925 || 624 <= Number(cardNumber.substring(0, 3)) <= 626 || 6282 <= Number(cardNumber.substring(0, 4)) <= 6288)):
		return 'China UnionPay';
		break;
	}

	return 'Credit Card not supported';
};


