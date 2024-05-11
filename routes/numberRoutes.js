const router = require('express').Router()
const Numero = require('../models/Numero')
const tradutorService = require('../services/traducaoService')

router.post('/', async (req, res)=>{
    const { numero } = req.body;
    
    try {       
        const extenso = tradutorService.traduzirNumero(numero)
        await Numero.create({ numero, extenso });
        return res.json({ numero, extenso });
      } catch (error) {
        console.error('Erro ao traduzir número:', error);
        res.status(500).json({ error: 'Erro ao traduzir número' });
      }
})
module.exports = router