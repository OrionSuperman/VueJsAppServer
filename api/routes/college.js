const getJSON = require('get-json')

const baseAPIUrl = 'https://api.data.gov/ed/collegescorecard/v1/schools?school.name='
const apiKey = '&api_key=WH4OlKqH1AgOPmM82EFGwwoidtp8GhJH4Wq74Rkp'

module.exports = function (router) {
  router.get('/college/:name', function (req, res) {
    let queryURL = baseAPIUrl + req.params.name + apiKey
    getJSON(queryURL, function (error, response) {
      console.log(response)
      if (error) return console.log(error)
      res.json(response)
    })
  })
}
