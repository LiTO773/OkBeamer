import React, { useState } from 'react'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

const ChooseFileView = ({ nextView }) => {
  // Stores the text to display
  const [warningText, setWarningText] = useState('Select the PDF you want to change:')

  /**
   * Creates a file picker
   * If the user picks a valid file it will move to the next view
   * If not, it will display a warning
   */
  const filePicker = () => {
    var input = document.createElement('input')
    input.type = 'file'

    input.onchange = e => {
      console.log(e.target.files[0])
      const file = e.target.files[0]
      // Check if the file is valid
      if (file.name.endsWith('.pdf')) {
        nextView(file)
      } else {
        setWarningText('Uhm, the file you selected isn\'t a PDF 😕. Try another one.')
      }
    }

    input.click()
  }

  return (
    <div className='centered-view'>
      <p className='view-text'>{warningText}</p>
      <Button text='Choose File' style='success' onClick={filePicker} />
    </div>
  )
}

ChooseFileView.propTypes = {
  nextView: PropTypes.func.isRequired
}

ChooseFileView.defaultProps = {}

export default ChooseFileView
