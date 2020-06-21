import React from 'react'
import pdfjs from 'pdfjs-dist'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import DrawableCanvas from '../components/DrawableCanvas'
// import PropTypes from 'prop-types'
import '../styles/views/Views.css'

const ChooseZoneView = ({ pdf }) => {
  return (
    <div className='centered-view'>
      <p className='view-text'>Choose in the canvas which part of the document indicates a change. This could be something like the title or the page number.</p>
      <DrawableCanvas pdf={pdf} />
      <Button text='Convert' />
    </div>
  )
}

ChooseZoneView.propTypes = {
  pdf: PropTypes.object.isRequired
}

ChooseZoneView.defaultProps = {}

export default ChooseZoneView
