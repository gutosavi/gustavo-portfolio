import React from 'react'

interface SectionTitleProp {
  title: string;
  width: number;
}

const SectionTitle = ({ title, width }: SectionTitleProp) => {
  return (
    <div className={`text-primary-600 text-3xl font-display font-bold leading-[0.85] w-${width} wrap-break-word laptop:text-9xl`}>
      {title}
    </div>
  )
}

export default SectionTitle