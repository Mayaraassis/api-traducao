const unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
const especiais = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
const dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
const centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];

function traduzirNumero(numero) {
  if (numero < 0 || numero > 999) {
    throw new Error('Número fora do intervalo válido (0-999)');
  }

  if (numero === 0) {
    return 'zero';
  }

  if (numero < 10) {
    return unidades[numero];
  }

  if (numero < 20) {
    return especiais[numero - 10];
  }

  if (numero < 100) {
    const dezena = dezenas[Math.floor(numero / 10)];
    const unidade = numero % 10 === 0 ? '' : ` e ${unidades[numero % 10]}`;
    return `${dezena}${unidade}`;
  }
  if (numero == 100){
    return 'cem'
  }

  if (numero < 1000) {
    const centena = centenas[Math.floor(numero / 100)];
    const resto = numero % 100;
    const conjuncao = resto === 0 ? '' : ' e ';
    let dezenaUnidade = traduzirNumero(resto) === 'zero'? '': traduzirNumero(resto);

    return `${centena}${conjuncao}${dezenaUnidade}`;
  }
}

module.exports = { traduzirNumero };