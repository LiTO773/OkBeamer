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
      <img
        className='hooray-gif'
        src='https://media1.tenor.com/images/3284a8be1baf3f415f175e0ebc4fb399/tenor.gif'
        width='369'
        height='281'
      />
      <p className='view-text'>Finished 🎉 Here's your file:</p>
      <div className='buttons'>
        <Button text='Convert another file' onClick={homeView} />
        <a href={blob} className='download-link' download>
          <Button text='Download' type='success' />
        </a>
      </div>
    </div>
  )
}

DownloadView.propTypes = {
  blob: PropTypes.string.isRequired,
  homeView: PropTypes.func.isRequired
}

DownloadView.defaultProps = {}

export default DownloadView
