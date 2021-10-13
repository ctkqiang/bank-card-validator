export default class BankCardValidator {
    constructor(card_number) {
        if ((card_number) == (undefined)) return ('Card number is not specified.');
        this.card_number = card_number;
    }

    get_chipset() {
        switch (this.card_number.substring(0, 1)) {
            case '4':
                return ('VISA');
            case '5':
                return ('MASTERCARD');
            case '3':
                if (this.card_number.substring(0, 2) == ('35')) {
                    return ('JCB');
                } else if (this.card_number.substring(0, 2) == ('36') || this.card_number.substring(0, 2) == ('36')) {
                    return ('DINERS CLUB');
                } else if (this.card_number.substring(0, 2) == ('37')) {
                    return ('AMERICAN EXPRESS');
                } else {
                    return ('UNKNOWN');
                }
        }
    }

    validate() {
        let arr = (this.card_number + '').split('').reverse().map((x) => parseInt(x));
        let last_digits = arr.splice(0, 1)[0];
        let sum = arr.reduce((account, value, interval) => (interval % 2 !== 0 ? account + value : account + ((value * 2) % 9) || 9), 0);

        sum += last_digits;

        if ((sum) % 10 === 0) {
            return JSON.stringify({
                chipset: (this.get_chipset()),
                card_number: (this.card_number),
                is_valid: (true),
            }, null, 2);
        } else {
            return JSON.stringify({
                chipset: (this.get_chipset()),
                card_number: (this.card_number),
                is_valid: (false),
            }, null, 2);
        }
    }
}