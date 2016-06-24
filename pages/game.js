var el = require('bel')
var css = require('sheetify')

module.exports = function (params, state, send) {
  var frame = state.game.frame
  var image = state.game.frames[frame]

  var prefix = css`
    :host {
      color: #333;
      height: 100%;
      text-align: center;
      font-family: monospace;
      font-weight: 300;
      color: #94ca5d;
      font-size: 20px;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      cursor: pointer;
    }

    h1 {
      font-size: 20px;
    }

    .svg-wrapper {
      height: 100%;
    }

    .plants {
      font-size: 15px;
    }

    .frame {
      width: auto;
      height: 400px;
      display: block;
      margin: 0 auto;
    }
  `

  var svgWrapper = el`<div class="svg-wrapper"></div>`
  svgWrapper.innerHTML = image.svg

  return el`
    <div class="${prefix}">
    <h1>${state.game.title}</h1>
    <div class="plants">${state.game.plants || 'click'}</div>
    <div class="transition">
      ${svgWrapper}
    </div>
    </div>
  `
}
