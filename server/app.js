const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')

app.set('port', (process.env.PORT || 3000))
app.use('/assets', express.static('./www/assets/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

routes(app)

app.listen(app.get('port'), () => {
  console.log(`Server started: http://localhost:${app.get('port')}/`)
})
