import React from 'react'
import ReactDom from 'react-dom'
import Popup from 'react-popup'
import UserSetting from './UserSetting'

if (module.hot) {
  module.hot.accept()
}

const config = {
  selectGetAttribute: 'data_li',
  test_a: {
    action: 'newWindow',
    options: {
      url: 'http://www.google.com/',
      width: 1024,
      height: 768
    }
  },
  user_setting: {
    action: 'popupWindow',
    options: {
      target: <UserSetting />,
      width: 80 + '%',
      height: 80 + '%',
      top: 10 + '%',
      left: 10 + '%',
      margin: 0,
      opacity: 1
    }
  }
}

const selectAction = {
  newWindow: function (options) {
    window.open(options.url, '', "width="+options.width+",height="+options.height)
  },
  popupWindow: function (options) {
    Popup.create({
      content: options.target,
      position: function (box) {
        box.style.width = options.width
        box.style.height =options.height
        box.style.top  =options.top
        box.style.left =options.left
        box.style.margin =options.margin
        box.style.opacity =options.opacity
      }
    })
  }
}

const el = document.querySelectorAll('['+config.selectGetAttribute+']')

const div = document.createElement("div")
document.body.appendChild(div)

for (let key in el) {
  if (el.hasOwnProperty(key)) {
    const getAttribute = config[el[key].getAttribute(config.selectGetAttribute)]
    if (getAttribute !== undefined) {
      el[key].addEventListener('click', function () {
        selectAction[getAttribute.action](getAttribute.options)
      })
    }
  }
}
console.log('dsfsdfsfdfsdfsddsdf');
ReactDom.render(
    <Popup className = 'mm-popup'/>,
    div
)
