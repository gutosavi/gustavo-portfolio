import React from 'react'

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='max-w-290 mx-auto px-4'>
      {children}
    </div>
  )
}

export default Container