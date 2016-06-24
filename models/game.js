var fs = require('fs')
var path = require('path')
var extend = require('xtend')

module.exports = {
  namespace: 'game',
  state: {
    title: 'grow',
    clicks: 0,
    frame: 0,
    plants: 0,
    frames: [
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/0.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/1.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/2.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/3.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/4.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/5.svg'))
      },
      {
        svg: fs.readFileSync(path.join(__dirname, '..', 'images/6.svg'))
      }
    ]
  },
  reducers: {
    click: function (params, state, send) {
      var newState = extend(state)
      newState.frame++
      newState.clicks++
      if (newState.frame === 7) {
        newState.plants++
        newState.frame = 0
      }
      return newState
    }
  },
  subscriptions: [
    function onclick (send) {
      document.addEventListener('click', function () {
        send('game:click')
      })
    }
  ]
}
