import React, { useState } from 'react'
import ErrorView from './views/ErrorView.js'
import ChooseFileView from './views/ChooseFileView.js'
import LoadPDFView from './views/LoadPDFView.js'
import ChooseZoneView from './views/ChooseZoneView.js'
import ArrangePDFView from './views/ArrangePDFView.js'
import DownloadView from './views/DownloadView.js'

const Views = () => {
  // #region State
  // This state stores the views available
  const [currentView, setCurrentView] = useState(1)

  // This state stores the current error message
  const [errorMsg, setErrorMsg] = useState('')

  // This state stores the uploaded file as base64
  const [receivedFileBase64, setReceivedFileBase64] = useState('')

  // This state stores the uploaded file as a PDFJS variable
  const [receivedFile, setReceivedFile] = useState({})

  // This state stores the coordinates of the changing area
  const [coordinates, setCoordinates] = useState({ startX: -1, startY: -1, endX: -1, endY: -1 })

  // This state stores the completed file as a blob url
  const [completedFile, setCompletedFile] = useState('')
  // #endregion State

  // #region View specific functions
  /**
   * Receives the picked file blob, stores it, and moves to the next view
   * Corresponds to the nextView of ChooseFilePicker
   *
   * @param {Object} file - The file's blob
   */
  const fileReceived = file => {
    setReceivedFileBase64(file)
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

  /**
   * Receives the coordinates chosen by the user, and moves to the next view
   * Corresponds to the nextView of ChooseZoneView
   *
   * @param {number} startX Start position of the changing area (X coordinate)
   * @param {number} startY Start position of the changing area (Y coordinate)
   * @param {number} endX End position of the changing area (X coordinate)
   * @param {number} endY End position of the changing area (Y coordinate)
   */
  const coordinatesSet = (startX, startY, endX, endY) => {
    setCoordinates({ startX, startY, endX, endY })
    setCurrentView(currentView + 1)
  }

  /**
   * Receives the newly created file blob
   * Corresponds to the nextView of ArrangePDFView
   *
   * @param {Object} file - The file blob
   */
  const fileCompleted = file => {
    setCompletedFile(file)
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
    <ErrorView key='0' error={errorMsg} nextView={() => setCurrentView(1)} />,
    <ChooseFileView key='1' nextView={fileReceived} errorHandler={errorHandler} />,
    <LoadPDFView key='2' file={receivedFileBase64} errorHandler={errorHandler} nextView={fileLoaded} />,
    <ChooseZoneView key='3' pdf={receivedFile} nextView={coordinatesSet} />,
    <ArrangePDFView
      key='4'
      pdfBase64={receivedFileBase64}
      pdf={receivedFile}
      nextView={fileCompleted}
      errorHandler={errorHandler}
      startX={coordinates.startX}
      startY={coordinates.startY}
      endX={coordinates.endX}
      endY={coordinates.endY}
    />,
    <DownloadView key='5' blob={completedFile} homeView={() => setCurrentView(1)} />
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
