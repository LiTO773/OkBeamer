import React from 'react'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

/**
 * This view is responsible for the input of the PDF file. After a correct PDF 
 * file is inserted, it is sent to the parent.
 *
 * THIS VIEW ISN'T RESPONSIBLE FOR THE CONVERSION, BUT LoadPDFView IS
 *
 * @param {func} nextView - Prop that indicates to the parent that the new view 
 * can be displayed, it also receives the selected file object
 */
const ChooseFileView = ({ nextView, errorHandler }) => {
  /**
   * Creates a file picker
   * When the user picks a file, it will move to the next view with this file
   */
  const filePicker = () => {
    var input = document.createElement('input')
    input.type = 'file'
    input.accept = 'application/pdf'

    input.onchange = e => {
      const file = e.target.files[0]
      input.remove()

      // Read the file as base64
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => nextView(reader.result)
      reader.onerror = () => errorHandler('Unable to convert the given file 😕.')
    }

    input.click()
  }

  return (
    <div className='centered-view'>
      <p className='view-text'>Select the PDF you want to change:</p>
      <Button text='Choose File' type='success' onClick={filePicker} />
    </div>
  )
}

ChooseFileView.propTypes = {
  nextView: PropTypes.func.isRequired,
  errorHandler: PropTypes.func.isRequired
}

ChooseFileView.defaultProps = {}

export default ChooseFileView
