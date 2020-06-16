import React, { useState } from 'react'
import ErrorView from './views/ErrorView.js'
import ChooseFileView from './views/ChooseFileView.js'

const Views = () => {
  // #region State
  // This state stores the views available
  const [currentView, setCurrentView] = useState(1)

  // This state stores the uploaded file
  const [receivedFile, setReceivedFile] = useState({})
  // #endregion State

  // #region View specific functions
  /**
   * Receives the picked file, stores it and moves to the next view
   * Corresponds to the nextView of ChooseFilePicker
   *
   * @param {Object} file - All the file's information
   */
  const fileReceived = file => {
    setReceivedFile(file)
    setCurrentView(currentView + 1)
  }

  // #endregion View specific functions

  // Views to be displayed
  // 0: Error view
  // 1: Choose file view
  // 2: Choose zone view
  // 3: Converting view
  // 4: Download view
  const views = [
    <ErrorView key='0' />,
    <ChooseFileView key='1' nextView={fileReceived} />,
    <p key='2'>Placeholder... for now...</p>
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
