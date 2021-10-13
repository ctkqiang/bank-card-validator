### Simple bank card validator

This Package is based on luhn algorithm where it return data like this:

```json
{
  "chipset": "MASTERCARD",
  "card_number": "5425233430109903",
  "is_valid": true
}
{
  "chipset": "VISA",
  "card_number": "4554738890994555",
  "is_valid": false
}
```

#### Installation

```js
npm install bank-card-validator --save
```

#### Usage

The javascript discipline used in this package is `ES6` where the package.json is set to `"type": "module"`

```javascript
import validator from "bank-card-validator";

let valid_card = new validator("5425233430109903").validate();
let invalid_card = new validator("4554738890994555").validate();

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
```
