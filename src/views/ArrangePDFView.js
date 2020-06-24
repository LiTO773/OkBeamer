import React from 'react'
import Spinner from '../components/Spinner'
import ArrangePDFController from '../components/ArrangePDFController'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

/**
 * This view is responsible for finding which pages are transitions and removing
 * them from the file.
 *
 * Most of the logic in this view is stored in ArrangePDFController
 *
 * Props (all mandatory):
 *   - pdfBase64: Refers to the base64 of the pdf file that is going to be
 *                edited
 *   - pdf: Refers to the loaded pdf file that is going to be rendered
 *   - nextView: Moves to the nextView with the newly created file
 *   - errorHandler: Function used to indicate to the user that an error
 *                   occurred
 *   - startX: startX: Start position of the changing area (X coordinate)
 *   - startY: Start position of the changing area (Y coordinate)
 *   - endX: End position of the changing area (X coordinate)
 *   - endY: End position of the changing area (Y coordinate)
 *   - nextView: Function that indicates that the PDF was completed (TODO define
 *               the arguments)
 *
 * @param {Object} props - Props described above
 */
const ArrangePDFView = props => {
  return (
    <div className='centered-view'>
      <Spinner />
      <ArrangePDFController
        pdfBase64={props.pdfBase64}
        pdf={props.pdf}
        nextView={props.nextView}
        errorHandler={props.errorHandler}
        startX={props.startX}
        startY={props.startY}
        endX={props.endX}
        endY={props.endY}
      />
      <p className='view-text'>Removing those pesky transitions. Hold tight!</p>
    </div>
  )
}

ArrangePDFView.propTypes = {
  pdfBase64: PropTypes.string.isRequired,
  pdf: PropTypes.object.isRequired,
  nextView: PropTypes.func.isRequired,
  errorHandler: PropTypes.func.isRequired,
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired,
  endX: PropTypes.number.isRequired,
  endY: PropTypes.number.isRequired
}

ArrangePDFView.defaultProps = {}

export default ArrangePDFView
