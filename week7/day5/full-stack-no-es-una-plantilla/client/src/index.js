import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'antd/dist/antd.css'
import * as serviceWorker from './serviceWorker'
import Routes from './Routes'
import MyProvider from './context'

ReactDOM.render(
  <MyProvider>
    <Routes />
  </MyProvider>,
  document.getElementById('root')
)

serviceWorker.register()
