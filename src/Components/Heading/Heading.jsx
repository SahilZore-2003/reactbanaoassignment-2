import React from 'react'
import "./Heading.scss"

const Heading = ({title}) => {
  return (
    <h1 className='heading'>
      {title}
    </h1>
  )
}

export default Heading
