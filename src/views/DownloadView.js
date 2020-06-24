import React from 'react'
import Button from '../components/Button'
import PropTypes from 'prop-types'
import '../styles/views/Views.css'

/**
 * This view is responsible for displaying a download link to the finalized
 * file
 *
 * Props:
 *    - blob: Blob url to the completed file
 *    - homeView: Function that redirects to the home view
 * @param {Object} props Described above
 */
const DownloadView = ({ blob, homeView }) => {
  return (
    <div className='centered-view'>
      <p className='view-text'>Finished 🎉 Here's your file:</p>
      <a href={blob} className='download-link' download>
        <Button text='Download' type='success' />
      </a>
      <Button text='Convert another file' onClick={homeView} />
    </div>
  )
}

DownloadView.propTypes = {
  blob: PropTypes.string.isRequired,
  homeView: PropTypes.func.isRequired
}

DownloadView.defaultProps = {}

export default DownloadView
