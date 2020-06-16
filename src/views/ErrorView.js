import React from 'react'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

/**
 * This view is responsible for displaying errors. It will always redirect to
 * the first non-error view.
 *
 * @param {Object} props - error stores the error message, and nextView is the
 * function to switch to the next view
 */
const ErrorView = ({ error, nextView }) => {
  return (
    <div className='centered-view'>
      <p className='view-text'>{error} Do you want to try again?</p>
      <Button text='Try again' onClick={nextView} />
    </div>
  )
}

ErrorView.propTypes = {
  error: PropTypes.string.isRequired,
  nextView: PropTypes.func.isRequired
}

ErrorView.defaultProps = {}

export default ErrorView
