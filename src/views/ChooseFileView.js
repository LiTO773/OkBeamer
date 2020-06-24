/* eslint-env browser */
import React from 'react'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

/**
 * This view is the home view of the application. It is responsible for the
 * input of the PDF file. After a correct PDF file is inserted, it is sent to
 * the parent.
 *
 * THIS VIEW ISN'T RESPONSIBLE FOR THE CONVERSION, BUT LoadPDFView IS
 *
 * @param {func} nextView - Prop that indicates to the parent that the new view
 * can be displayed and an error handler
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
    <div>
      <h2>What is this?</h2>
      <p className='description-text'>
        <b>OkBeamer</b> is a tool made to remove transitions from PDFs created
        with Beamer or any other software. Doing this will not only create a
        smaller file, but an actually printable one.
      </p>
      <h2>How does it work?</h2>
      <p className='description-text'>
        First you upload the file with the button below 👇. After that, you'll
        be asked to draw a rectangle over the area that indicates change. This
        is usually either the title or the page number. And... <i>Voilà</i>
      </p>
      <div className='centered-view'>
        <p className='view-text'>Ready?!</p>
        <Button text='Choose File' type='success' onClick={filePicker} />
      </div>
    </div>
  )
}

ChooseFileView.propTypes = {
  nextView: PropTypes.func.isRequired,
  errorHandler: PropTypes.func.isRequired
}

ChooseFileView.defaultProps = {}

export default ChooseFileView
