import React, { useState } from 'react'
import ErrorView from './views/ErrorView.js'
import ChooseFileView from './views/ChooseFileView.js'

export default () => {
  // The state stores the views available:
  // 0: Error view
  // 1: Choose file view
  // 2: Choose zone view
  // 3: Converting view
  // 4: Download view
  const [currentView, setCurrentView] = useState(0)

  const views = [
    <ErrorView key='0' />,
    <ChooseFileView key='1' />
  ]

  return (
    <div>
      {views[currentView]}
    </div>
  )
}
