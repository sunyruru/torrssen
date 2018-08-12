require('dotenv').config()

const Transmission = require('transmission')

const transmission = new Transmission({
  'host': process.env.TMHOST,
  'port': process.env.TMPORT,
  'username': process.env.TMUSER,
  'password': process.env.TMPASSWORD
})

module.exports = {
  addUrl: (url, options, callback) => transmission.addUrl(url, options, callback),
  get: (id, collback) => transmission.get(id, collback)
}
