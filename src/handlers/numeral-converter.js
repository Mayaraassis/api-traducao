const TranslateService = require('../services/numeral-converter-services')

class TranslateNumberHandler {
  static translateNumber(req, res) {
    const { number: numberToConvert } = req.body;

    try {
      if (isNaN(numberToConvert)) {
        return res.status(404).json({ error: `O número ${numberToConvert} informado não é um número válido` });
      }

      const inWords = TranslateService.numberToWords(numberToConvert)
      return res.json({ inWords });
    } catch (error) {
      console.error('Erro ao traduzir número:', error);
      res.status(500).json({ error: error.message || 'Erro ao traduzir número' });
    }
  }
}

module.exports = TranslateNumberHandler