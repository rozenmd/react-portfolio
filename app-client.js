import React from 'react'
import { render } from 'react-dom'
import Root from './routes'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-42211308-2')

render(<Root />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NewRoot = require('routes').default

    render(<NewRoot />, document.getElementById('app'))
  })
}
