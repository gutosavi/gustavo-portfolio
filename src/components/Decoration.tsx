import React from 'react'

const Decoration = () => {
  return (
    <div className="relative w-11 h-12 z-0">
      <div className="bg-primary-300 absolute size-7 laptop:size-10 m-1 top-10 right-5" />
      <div className="bg-primary-500 absolute size-7 laptop:size-10 top-9 right-8" />
    </div>
  )
}

export default Decoration