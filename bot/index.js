const VilcusClient = require('./structures/Client')

const client = new VilcusClient()

//Top.GG Server count stuff Ignore...
const AutoPoster = require('topgg-autoposter')
const config = require('./config.json')

module.exports = poster = new AutoPoster(config.botlist.top, client)
//Over

client.start()
