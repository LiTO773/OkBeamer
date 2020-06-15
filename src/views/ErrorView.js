import React from 'react'
import Button from '../components/Button'
import '../styles/views/Views.css'

export default props => {
  return (
    <div className='centered-view'>
      <p className='view-text'>Oh no, an error occurred 😢. Do you want to try again?</p>
      <Button text='idk' style='default' />
    </div>
  )
}
