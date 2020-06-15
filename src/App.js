import React from 'react'
import Header from './Header.js'
import Views from './Views.js'
import './styles/App.css'

function App () {
  return (
    <div className='app'>
      <Header />
      <Views />
      {/* <p>This might come in handy for presentations that have each transition in a different page (I'm looking at you Beamer presentations).</p> */}
    </div>
  )
}

export default App
