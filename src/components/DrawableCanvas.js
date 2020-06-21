import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import '../styles/components/DrawableCanvas.css'

/**
 * The DrawableCanvas component is responsible for rendering an interactive
 * canvas. The user can create a region which dictates what part of the PDF
 * indicates a change.
 *
 * Props (all mandatory):
 *   - pdf: Refers to the loaded pdf file that is going to be displayed
 *   - setSelection: It's function given by the parent that receives the
 *                   selection made by the user
 *
 * @param {object} props Canvas props (listed above)
 */
const DrawableCanvas = ({ pdf, setSelection }) => {
  // Coordinates state
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 })

  // After the component is mounted, render the canvas
  useEffect(() => {
    pdf.getPage(1).then(page => {
      const scale = 1
      const viewport = page.getViewport({ scale })

      const canvas = document.getElementById('drawable-canvas')
      const context = canvas.getContext('2d')

      const renderContext = {
        canvasContext: context,
        viewport
      }
      page.render(renderContext)
    })
  })

  // Handle mouse down (start)
  const handleMouseDown = ({ nativeEvent }) => {
    // console.log(e.screenX)
    // console.log(e.screenY)
    setCoordinates({
      x: nativeEvent.x,
      y: nativeEvent.y
    })
  }

  // Handle mouse up (finish)
  const handleMouseUp = ({ nativeEvent }) => {
    const canvas = document.getElementById('drawable-canvas')
    const rect = canvas.getBoundingClientRect()
    const context = canvas.getContext('2d')
    context.beginPath()
    context.fillStyle = 'rgba(0, 102, 204,0.5)'
    // Draw the rectangle
    context.fillRect(
      coordinates.x - rect.left,
      coordinates.y - rect.top,
      nativeEvent.x - coordinates.x,
      nativeEvent.y - coordinates.y
    )
  }

  return (
    <canvas
      id='drawable-canvas'
      height='540'
      width='720'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    />
  )
}

DrawableCanvas.propTypes = {
  pdf: PropTypes.object.isRequired,
  setSelected: PropTypes.func.isRequired
}

DrawableCanvas.defaultProps = {}

export default DrawableCanvas
