import React, { useState } from 'react'
import ErrorView from './views/ErrorView.js'
import ChooseFileView from './views/ChooseFileView.js'
import LoadPDFView from './views/LoadPDFView.js'
import ChooseZoneView from './views/ChooseZoneView.js'

const Views = () => {
  // #region State
  // This state stores the views available
  const [currentView, setCurrentView] = useState(1)

  // This state stores the current error message
  const [errorMsg, setErrorMsg] = useState('')

  // This state stores the uploaded file location
  const [receivedFileBlob, setReceivedFileBlob] = useState('')

  // This state stores the uploaded file as a PDFJS variable
  const [receivedFile, setReceivedFile] = useState({})
  // #endregion State

  // #region View specific functions
  /**
   * Receives the picked file blob, stores it, and moves to the next view
   * Corresponds to the nextView of ChooseFilePicker
   *
   * @param {Object} file - The file's blob
   */
  const fileReceived = file => {
    setReceivedFileBlob(file)
    setCurrentView(currentView + 1)
  }

  /**
   * Receives the PDFJS generated variable, stores it, and moves to the next
   * view
   * Corresponds to the nextView of LoadPDFView
   *
   * @param {Object} file - The PDFJS file
   */
  const fileLoaded = file => {
    setReceivedFile(file)
    setCurrentView(currentView + 1)
  }

  // #endregion View specific functions

  /**
   * Receives an error message and switches to the ErrorView
   *
   * @param {string} message - Error Message to display to the user
   */
  const errorHandler = message => {
    setErrorMsg(message)
    setCurrentView(0)
  }

  // Views to be displayed
  // 0: Error view
  // 1: Choose file view
  // 2: Load PDF view
  // 3: Choose zone view
  // 4: Converting view
  // 5: Download view
  const views = [
    <ErrorView key='0' nextView={() => setCurrentView(1)} />,
    <ChooseFileView key='1' nextView={fileReceived} />,
    <LoadPDFView key='2' file={receivedFileBlob} errorHandler={errorHandler} nextView={fileLoaded} />,
    <ChooseZoneView key='3' pdf={receivedFile} />
  ]

  return (
    <div>
      {views[currentView]}
    </div>
  )
}

Views.propTypes = {}
Views.defaultProps = {}

export default Views
