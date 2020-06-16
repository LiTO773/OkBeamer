import React from 'react'
import PropTypes from 'prop-types'
import '../styles/components/Button.css'

const Button = props => {
  return (
    <div className={`button button-${props.style}`}>
      {props.text}
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string
}

Button.defaultProps = {
  style: 'default'
}

export default Button
