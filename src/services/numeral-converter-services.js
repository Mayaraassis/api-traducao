const units = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const specials = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const tens = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const hundreds = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

class TranslationService {

  static numberToWords(number) {
    if (number < 0 || number > 999) {
      throw new Error('Número não esta no range permitido - (0-999)');
    }

    if (number === 0) {
      return 'zero';
    }

    if (number < 10) {
      return units[number];
    }

    if (number < 20) {
      return specials[number - 10];
    }

    if (number < 100) {
      const ten = tens[Math.floor(number / 10)];
      const unit = number % 10 === 0 ? '' : ` and ${units[number % 10]}`;
      return `${ten}${unit}`;
    }
    if (number == 100) {
      return 'cem'
    }

    if (number < 1000) {
      const hundred = hundreds[Math.floor(number / 100)];
      const remainder = number % 100;
      const conjunction = remainder === 0 ? '' : ' e ';
      let tenUnit = this.numberToWords(remainder) === 'zero' ? '' : this.numberToWords(remainder);

      return `${hundred}${conjunction}${tenUnit}`;
    }
  }
}

module.exports = TranslationService;