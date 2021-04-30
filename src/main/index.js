const fastify = require('fastify')()
const fetch = require('node-fetch')

fastify.get('/', async (_req, res) => res.send('Hi'))
fastify.get('/env', async (_req, res) =>
  res.send(`Env: ${process.env.message || 'No message'}`)
)

fastify.get('/talk', async (_req, _res) => {
  let api = process.env.api || "localhost:3001"

  let data = await fetch(`http://${api}/api`).then(res => res.json())

  return data
})

fastify.listen(3000, '0.0.0.0').then(() => {
  console.log('Listening at :3000')
})
