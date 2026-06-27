import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const PageContent = () => {
  return (
    <div className='py-10 flex justify-between h-[90vh] px-18'> 
    <LeftText />
    <RightText />
    </div>
  )
}

export default PageContent