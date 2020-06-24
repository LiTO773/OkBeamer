import React from 'react'
import Header from './components/Header.js'
import Views from './Views.js'
import Footer from './components/Footer.js'
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
      <Footer />
    </div>
  )
}

export default App
