import React from 'react'
import '../styles/components/Button.css'

export default props => {
  return (
    <div className={`button button-${props.style}`}>
      {props.text}
    </div>
  )
}
