import React from 'react'
import Arrow from './Arrow'
import Text from './HeroText'
import 'remixicon/fonts/remixicon.css'

const Leftcontent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
        <Text />
        <Arrow />
    </div>
  )
}

export default Leftcontent