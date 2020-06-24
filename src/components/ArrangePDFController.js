/* eslint-env browser */
import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { PDFDocument } from 'pdf-lib'
import '../styles/components/FindRepeatedPages.css'

/**
 * EditPDFController
 *
 * What does this do?
 * This component is responsible for looping over every page in the given PDF
 * file and find every page in which the selected region changes. After that it
 * will create a file with only the important pages.
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

const ArrangePDFController = ({ pdfBase64, pdf, nextView, errorHandler, startX, startY, endX, endY }) => {
  // Avoid componentWillUnmount evocation
  const [rendered, setRendered] = useState(false)

  const fullCanvas = useRef(null)
  const sectionCanvas = useRef(null)

  const convertToBase64 = (img, width, height) => {
    const context = sectionCanvas.current.getContext('2d')
    sectionCanvas.current.width = Math.abs(width)
    sectionCanvas.current.height = Math.abs(height)
    context.putImageData(img, 0, 0)
    return sectionCanvas.current.toDataURL()
  }

  const findExtraPages = async () => {
    const pagesToKeep = []
    let currentSection = null // Stores the section's base64
    const originalDoc = await PDFDocument.load(pdfBase64)

    // Iterate over all the pages
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i)

      // Render the page to the full canvas
      const scale = 700 / page.view[2]
      const viewport = page.getViewport({ scale })

      const context = fullCanvas.current.getContext('2d')
      fullCanvas.current.height = viewport.height
      fullCanvas.current.width = viewport.width

      const renderContext = {
        canvasContext: context,
        viewport
      }
      await page.render(renderContext).promise

      // Create an image of the section and convert it to base64
      const sectionImage = context.getImageData(startX, startY, endX - startX, endY - startY)
      const base64Image = convertToBase64(sectionImage, endX - startX, endY - startY)

      // Check if the page has changed, if so, delete the previous ones
      if (currentSection === null) {
        // It's the first page, do no check
        currentSection = base64Image
      } else {
        // The page changed
        if (currentSection !== base64Image) {
          currentSection = base64Image
          // Keeps the page before (-1) and subtracts one since pdf-lib starts at 0
          pagesToKeep.push(i - 2)
        }
      }
    }
    pagesToKeep.push(pdf.numPages - 1)

    try {
      // Create a new document and copy the pages
      const newDoc = await PDFDocument.create()
      const copiedPages = await newDoc.copyPages(originalDoc, pagesToKeep)
      copiedPages.forEach(page => newDoc.addPage(page))

      // Save the document as a blob and move to the next view
      const bytes = await newDoc.save()
      nextView(URL.createObjectURL(new Blob([bytes.buffer], { type: 'application/pdf' })))
    } catch (e) {
      errorHandler('Something happened while trying to create the new file 😥')
    }
  }

  // This is used since there needs to be a guarantee that fullCanvas and
  // sectionCanvas have been defined (equivalent to componentDidMount)
  useEffect(() => {
    if (!rendered) {
      setRendered(true)
      findExtraPages()
    }
  })

  return (
    <div>
      <canvas
        ref={fullCanvas}
        className='hidden-canvas'
      />
      <canvas
        ref={sectionCanvas}
        className='hidden-canvas'
      />
    </div>
  )
}

ArrangePDFController.propTypes = {
  pdfBase64: PropTypes.string.isRequired,
  pdf: PropTypes.object.isRequired,
  nextView: PropTypes.func.isRequired,
  errorHandler: PropTypes.func.isRequired,
  startX: PropTypes.number.isRequired,
  startY: PropTypes.number.isRequired,
  endX: PropTypes.number.isRequired,
  endY: PropTypes.number.isRequired
}

ArrangePDFController.defaultProps = {}

export default ArrangePDFController
