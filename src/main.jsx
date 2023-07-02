import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Menu } from './Menu.jsx'
import { Slider } from './Slider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    <Slider />   
  </>,
)
