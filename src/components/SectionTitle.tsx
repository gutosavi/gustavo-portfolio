import React from 'react'

interface SectionTitleProp {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProp) => {
  return (
    <div className="text-primary-600 text-4xl font-display font-bold leading-[0.85] w-70 wrap-break-word laptop:text-9xl">
      {title}
    </div>
  )
}

export default SectionTitle