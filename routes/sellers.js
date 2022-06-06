const router = require("express").Router();
const axios = require('axios');

//GET SELLERSID

router.get("/:cep", async (req, res) => {
  const cep = req.params.cep
  var config = {
    method: 'get',
    url: `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${cep}`,
    headers: { 
      'X-VTEX-API-AppKey': process.env.X_VTEX_API_AppKey_PCJ, 
      'X-VTEX-API-AppToken': process.env.X_VTEX_API_AppToken_PCJ
    }
  };

  await axios(config)
  .then(function (response) {
    res.status(200).json(response.data)
  }) 
  .catch(function (error) {
    res.status(500).json(error);
  });

})

router.get("/seller/:seller", async (req, res) => {
  const seller = req.params.seller
  var config = {
    method: 'get',
    url: `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${seller}`,
    headers: { 
      'X-VTEX-API-AppKey': process.env.X_VTEX_API_AppKey_PCJ, 
      'X-VTEX-API-AppToken': process.env.X_VTEX_API_AppToken_PCJ
    }
  };

  await axios(config)
  .then(function (response) {
    res.status(200).json(response.data)
  }) 
  .catch(function (error) {
    res.status(500).json(error);
  });

})

module.exports = router