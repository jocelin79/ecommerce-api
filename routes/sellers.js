const router = require("express").Router();
const axios = require('axios');

//GET SELLERS

router.get("/", async (req, res) => {
  // const cep = req.params.cep
  var config = {
    method: 'get',
    url: 'https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=14801788',
    headers: { 
      'X-VTEX-API-AppKey': 'vtexappkey-carrefourbr-PZLYPS', 
      'X-VTEX-API-AppToken': 'UTARJONVBFAYJEOZGNAUZIRIFLMBNUVOOLWNTLIORNRCMGSIVEQFCTNNYOXYGHPUYEVLDHUVPKUHHBDOZPBKMOKGRITGDBXVQBDESIDQJWDANEZSIQVGSCZVEVPLCJVC'
    }
  };

  axios(config)
  .then(function (response) {
    res.status(200).json(response.data)
  }) 
  .catch(function (error) {
    res.status(500).json(error);
  });

})

module.exports = router