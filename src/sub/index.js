const fastify = require('fastify')()

fastify.get('/', async (req, res) => res.send('Sub: Wokring'))
fastify.get('/env', async (req, res) =>
  res.send(`Env: ${process.env.message || 'No message'}`)
)

fastify.get('/api', async (req, res) => {
  return {
    message: 'cooking'
  }
})

fastify.listen(3001, '0.0.0.0').then(() => {
  console.log('Listening at :3001')
})
