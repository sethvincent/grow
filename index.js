var choo = require('choo')
var css = require('sheetify')
var app = choo()

css('normalize.css')
css('basscss')
css('./styles.css', { global: true })

app.model(require('./models/game'))

app.router(function (route) {
  return [
    route('/', require('./pages/game'))
  ]
})

var tree = app.start()
document.body.appendChild(tree)
