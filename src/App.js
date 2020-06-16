import React from 'react'
import Header from './Header.js'
import Views from './Views.js'
import './styles/App.css'

// Setup PDFJS worker
// Source: https://github.com/wojtekmaj/react-pdf#standard-browserify-and-others
import pdfjs from 'pdfjs-dist'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

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
