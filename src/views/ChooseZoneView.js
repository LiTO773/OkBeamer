import React from 'react'
import pdfjs from 'pdfjs-dist'
import Button from '../components/Button'
// import PropTypes from 'prop-types'
import '../styles/views/Views.css'

const ChooseZoneView = props => {
  return (
    <div className='centered-view'>
      <p className='view-text'>Choose in the canvas which part of the document indicates a change. This could be something like the title or the page number.</p>

      <Button text='Convert' />
    </div>
  )
}

ChooseZoneView.propTypes = {}

ChooseZoneView.defaultProps = {}

export default ChooseZoneView
