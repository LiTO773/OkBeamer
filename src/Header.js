import React from 'react'
import './styles/Header.css'

const Header = () => (
  <div>
    <h1 className='logo-name'>Ok Beamer</h1>
    <p className='description-text'>A super simple tool that checks for differences in certain parts of a PDF, and stores every last page before a change.</p>
  </div>
)

Header.propTypes = {}
Header.defaultProps = {}

export default Header
