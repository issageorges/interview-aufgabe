import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ColorsProvider } from './context/colorsContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ColorsProvider>
    <App />
  </ColorsProvider>,
)
