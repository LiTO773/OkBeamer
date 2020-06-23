import React, { useRef } from 'react'
import PropTypes from 'prop-types'
/**
 * FindRepeatedPages
 *
 * What does this do?
 * This component is responsible for looping over every page in the given PDF
 * file and find every page in which the selected region changes. After that it
 * will return an array with every page to keep.
 *
 * Why is it a component?
 * Although this code revolves mostly around comparing images in JS, it needs to
 * use two canvas, hence the need to instantiate a react component.
 *
 * How does it work?
 * Two hidden canvas will be drawn, the first one renders the document's page in
 * it's entirety, the second renders only the changing section. Then, a base64
 * image of the second canvas will be stored and used for future reference in
 * the next page.
 */

const FindRepeatedPages = ({ pdf }) => {
  const fullCanvas = useRef(null)
  const sectionCanvas = useRef(null)

  console.log(fullCanvas)

  return (
    <div>
      <canvas
        ref={fullCanvas}
        class='hidden-canvas'
      />
      <canvas
        ref={sectionCanvas}
        class='hidden-canvas'
      />
    </div>
  )
}

FindRepeatedPages.propTypes = {
  pdf: PropTypes.object.isRequired
}

FindRepeatedPages.defaultProps = {}

export default FindRepeatedPages