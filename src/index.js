import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import './index.css'

function Project() {
  return (
    <>
        <App />
    </>
  )
}

reactDom.render(<Project />, document.querySelector('#body'))