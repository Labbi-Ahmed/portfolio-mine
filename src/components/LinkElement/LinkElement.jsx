import React from 'react'
import './LinkElement.css'

function LinkElement( {title}) {
  return (
    <div className='link__element'>
        <span className='link__text'>{title}</span>
    </div>
  )
}

export default LinkElement