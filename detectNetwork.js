var detectNetwork = function(cardNumber) {
  var chinaUnionPayPrefixes = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  for (var i = 622126; i <= 622925; i++) {
    chinaUnionPayPrefixes.push(i.toString());
  }

  var match = false;
  for (var i = 0; i < chinaUnionPayPrefixes.length; i++) {
    if (chinaUnionPayPrefixes.indexOf(chinaUnionPayPrefixes[i]) !== -1) {
      match = true;
    }
  }

  if ((cardNumber.substring(0, 2) === '38' || cardNumber.substring(0, 2) === '39') && cardNumber.length === 14) {
    return 'Diner\'s Club';
  } else if ((cardNumber.substring(0, 2) === '34' || cardNumber.substring(0, 2) === '37') && cardNumber.length === 15) {
    return 'American Express';
  } else if ((cardNumber.substring(0, 4) === '4903' || cardNumber.substring(0, 4) === '4905' || cardNumber.substring(0, 4) === '4911' || cardNumber.substring(0, 4) === '4936' || cardNumber.substring(0, 4) === '6333' || cardNumber.substring(0, 4) === '6759' || cardNumber.substring(0, 6) === '564182' || cardNumber.substring(0, 6) === '633110') && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Switch';
  } else if (cardNumber.substring(0, 1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Visa';
  } else if ((cardNumber.substring(0, 2) === '51' || cardNumber.substring(0, 2) === '52' || cardNumber.substring(0, 2) === '53' || cardNumber.substring(0, 2) === '54' || cardNumber.substring(0, 2) === '55') && cardNumber.length === 16) {
    return 'MasterCard';
  } else if ((cardNumber.substring(0, 4) === '6011' || cardNumber.substring(0, 3) === '644' || cardNumber.substring(0, 3) === '645' || cardNumber.substring(0, 3) === '646'  || cardNumber.substring(0, 3) === '647' || cardNumber.substring(0, 3) === '648' || cardNumber.substring(0, 3) === '649'  || cardNumber.substring(0, 2) === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover';
  } else if ((cardNumber.substring(0, 4) === '5018' || cardNumber.substring(0, 4) === '5020' || cardNumber.substring(0, 4) === '5038' || cardNumber.substring(0, 4) === '6304') && (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'Maestro';
  } else if (match && (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return 'China UnionPay';
  }
};
