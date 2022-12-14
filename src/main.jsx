import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@styles/index.css'
// eslint-disable-next-line no-unused-vars
import { i18n } from '@i18n/provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
