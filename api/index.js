const express = require('express')
const router = express.Router()

require('./routes/college')(router)
require('./routes/user')(router)

module.exports = router
