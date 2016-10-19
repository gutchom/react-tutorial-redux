const fs = require('fs')
const url = require('url')
const apiComments = '/api/comments'

const routes = (app) => {
  app.get('/', (req, res) => {
    fs.readFile('./www/html/index.html', 'utf8', (err, html) => {
      res.send(html)
      if (err) console.error(err)
    })
  })

  app.get(apiComments, (req, res) => {
    fs.readFile('./data/comments.json', (err, data) => {
      res.setHeader('Cache-Control', 'no-cache')
      res.json(JSON.parse(data))
    })
  })

  app.post(apiComments, (req, res) => {
    const newComment = {
      id: Date.now(),
      author: req.body.author,
      text: req.body.text,
    }
    fs.readFile('./data/comments.json', (err, data) => {
      if (err) console.error(err)
      const comments = JSON.parse(data)
      comments.push(newComment)
      fs.writeFile('./data/comments.json', JSON.stringify(comments, null, 4), (err) => {
        if (err) console.error(err)
        res.setHeader('Cache-Control', 'no-cache')
        res.json(comments)
      })
    })
  })
}

module.exports = routes
