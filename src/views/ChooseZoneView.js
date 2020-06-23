import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../components/Button'
import DrawableCanvas from '../components/DrawableCanvas'
// import PropTypes from 'prop-types'
import '../styles/views/Views.css'

const ChooseZoneView = ({ pdf }) => {
  const [coords, setCoords] = useState({
    startX: -1,
    startY: -1,
    endX: -1,
    endY: -1
  })

  /**
   * Receives the coordinates of the area that indicates a change of page.
   * This function is passed as a prop to the drawable canvas
   *
   * @param {number} startX Start position of the changing area (X coordinate)
   * @param {number} startY Start position of the changing area (Y coordinate)
   * @param {number} endX End position of the changing area (X coordinate)
   * @param {number} endY End position of the changing area (Y coordinate)
   */
  const receiveCoords = (startX, startY, endX, endY) => {
    setCoords({
      startX,
      startY,
      endX,
      endY
    })
  }

  return (
    <div className='centered-view'>
      <p className='view-text'>Draw a rectangle over the part of the document indicates a change. This could be something like the title or the page number.</p>
      <DrawableCanvas pdf={pdf} sendCoords={receiveCoords} />
      <Button type={coords.startX === -1 ? 'unavailable' : 'default'} text='Convert' />
    </div>
  )
}

ChooseZoneView.propTypes = {
  pdf: PropTypes.object.isRequired
}

ChooseZoneView.defaultProps = {}

export default ChooseZoneView
