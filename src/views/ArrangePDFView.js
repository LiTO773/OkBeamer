import React from 'react'
import Spinner from '../components/Spinner'
import FindRepeatedPages from '../components/FindRepeatedPages'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

/**
 * This view is responsible for finding which pages are transitions and removing
 * them from the file.
 *
 * Props (all mandatory):
 *   - pdf: Refers to the loaded pdf file that is going to be edited
 *   - startX: startX: Start position of the changing area (X coordinate)
 *   - startY: Start position of the changing area (Y coordinate)
 *   - endX: End position of the changing area (X coordinate)
 *   - endY: End position of the changing area (Y coordinate)
 *   - nextView: Function that indicates that the PDF was completed (TODO define
 *               the arguments)
 *   - errorHandler: Function used to indicate to the user that an error
 *                   occurred
 *
 * @param {Object} props - Props described above
 */
const ArrangePDFView = props => {
  return (
    <div className='centered-view'>
      <Spinner />
      <FindRepeatedPages />
      <p className='view-text'>Doing something, just let me think smh</p>
    </div>
  )
}

ArrangePDFView.propTypes = {
  pdf: PropTypes.object.isRequired,
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired,
  endX: PropTypes.number.isRequired,
  endY: PropTypes.number.isRequired
}

ArrangePDFView.defaultProps = {}

export default ArrangePDFView
