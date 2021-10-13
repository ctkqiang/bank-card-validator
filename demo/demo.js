import validator from '../library/applicatiton.js';

let valid_card = new validator('5425233430109903').validate();
let invalid_card = new validator('4554738890994555').validate();

console.log(valid_card);
/**
 * output: 
 * 
 * {
 *   "chipset": "MASTERCARD",
 *   "card_number": "5425233430109903",
 *   "is_valid": true
 * }
 */

console.log(invalid_card);
/**
 * output: 
 * 
 * {
 *   "chipset": "VISA",
 *   "card_number": "4554738890994555",
 *   "is_valid": false
 * }
 */