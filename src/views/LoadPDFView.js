import React from 'react'
import pdfjs from 'pdfjs-dist'
import Spinner from '../components/Spinner'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

/**
 * This view is responsible for converting the file received in ChooseFileView
 * to a PDFjs variable.
 *
 * @param {Object} props - File to be interpreted and the next view function,
 * which receives the converted PDF file.
 */
const LoadPDFView = ({ file, nextView }) => {
  /**
   * Loads the file into a PDFJS variable and returns it to the parent.
   *
   * @param {string} file - File name of the file to be loaded
   */
  const loadFile = file => {
    console.log(file)
    const loadingTask = pdfjs.getDocument(file)
    loadingTask.promise
      .then(pdf => nextView(pdf))
      .catch(err => console.log(err))
  }

  loadFile(file)
  return (
    <div className='centered-view'>
      <Spinner />
      <p className='view-text'>Loading your PDF</p>
    </div>
  )
}

LoadPDFView.propTypes = {
  file: PropTypes.string.isRequired,
  nextView: PropTypes.func.isRequired
}

LoadPDFView.defaultProps = {}

export default LoadPDFView
