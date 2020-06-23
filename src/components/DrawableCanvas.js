import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import '../styles/components/DrawableCanvas.css'

/**
 * The DrawableCanvas component is responsible for rendering an interactive
 * canvas. The user can create a region which dictates what part of the PDF
 * indicates a change.
 *
 * Props (all mandatory):
 *   - pdf: Refers to the loaded pdf file that is going to be displayed
 *   - sendCoords: It's function given by the parent that receives the
 *                 selection made by the user
 *
 * @param {object} props Canvas props (listed above)
 */
const DrawableCanvas = ({ pdf, sendCoords }) => {
  // #region States and refs
  // Avoid rerenders of the canvas
  const [rendered, setRendered] = useState(false)

  // The variables below are used to render the page to the canvas
  const canvas = useRef(null)
  const renderedPage = useRef(null)
  const renderedContext = useRef(null)

  // Coordinates state
  const [coordinates, setCoordinates] = useState({
    startX: -1,
    startY: -1
  })

  // Stores if the mouse is being pressed
  const mouseIsDown = useRef(false)
  // #endregion States and refs

  /**
   * After the component is mounted, render the canvas
   * This canvas render will only happen once, with the help of the rendered
   * state
   */
  useEffect(() => {
    // Won't rerender the canvas if it was already rendered
    if (!rendered) {
      // Render the first page in the PDF
      pdf.getPage(1).then(page => {
        // Adjust the scale, make sure the canvas always has a width of 700px
        // page.view[2] is the width of the page
        const scale = 700 / page.view[2]
        const viewport = page.getViewport({ scale })

        const context = canvas.current.getContext('2d')
        canvas.current.height = viewport.height
        canvas.current.width = viewport.width
        context.fillStyle = 'rgba(0, 102, 204)'

        const renderContext = {
          canvasContext: context,
          viewport
        }
        page.render(renderContext)

        // Persist the required variables for rerenders
        renderedPage.current = page
        renderedContext.current = renderContext
        setRendered(true)
        console.log('fui renderizado')
      })
    }
  })

  /**
   * Rerenders the page in the canvas
   */
  const rerenderPage = () => {
    renderedPage.current.render(renderedContext.current)
  }

  /**
   * Handles the mouse down event. This means that the user wants to draw a
   * rectangle.
   *
   * @param {Object} param0 Target, in this case it's used to get the mouse
   * coordinates
   */
  const handleMouseDown = ({ nativeEvent }) => {
    // Remove the previous rectangle by rerendering the page
    rerenderPage()

    // Start the rectangle drawing process
    mouseIsDown.current = true
    setCoordinates(coords => ({
      startX: nativeEvent.x,
      startY: nativeEvent.y
    }))
  }

  /**
   * Handles the mouse up event. This means that the user has finished drawing a
   * rectangle.
   *
   * @param {Object} param0 Target, in this case it's used to get the mouse
   * coordinates
   */
  const handleMouseUp = ({ nativeEvent }) => {
    // Stop drawing
    mouseIsDown.current = false

    // Send the coordinates to the parent
    sendCoords(
      coordinates.startX,
      coordinates.startY,
      nativeEvent.x,
      nativeEvent.y
    )
  }

  /**
   * Draws the rectangle while the user moves it's cursor. It's a bit janky but
   * it allows a rectangle to be drawn.
   *
   * @param {Object} param0 Target, in this case it's used to get the mouse
   * coordinates
   */
  const handleMovement = ({ nativeEvent }) => {
    if (canvas.current != null && mouseIsDown.current) {
      const rect = canvas.current.getBoundingClientRect()
      const context = canvas.current.getContext('2d')

      // Draw the rectangle
      context.beginPath()
      context.fillRect(
        coordinates.startX - rect.left,
        coordinates.startY - rect.top,
        nativeEvent.x - coordinates.startX,
        nativeEvent.y - coordinates.startY
      )
    }
  }

  return (
    <canvas
      ref={canvas}
      id='drawable-canvas'
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMovement}
    />
  )
}

DrawableCanvas.propTypes = {
  pdf: PropTypes.object.isRequired,
  sendCoords: PropTypes.func.isRequired
}

DrawableCanvas.defaultProps = {}

export default DrawableCanvas
