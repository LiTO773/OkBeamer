import React from 'react'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

const ErrorView = props => {
  return (
    <div className='centered-view'>
      <p className='view-text'>Oh no, an error occurred 😢. Do you want to try again?</p>
      <Button text='idk' />
    </div>
  )
}

ErrorView.propTypes = {
  error: PropTypes.string
}

ErrorView.defaultProps = {
  error: ''
}

export default ErrorView
