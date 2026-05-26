import React from 'react'

interface SectionTitleProp {
  title: string;
  style?: React.CSSProperties;
}

const SectionTitle = ({ title, style }: SectionTitleProp) => {
  return (
    <div className={`text-primary-600 text-3xl font-display font-bold leading-[0.85] wrap-break-word laptop:text-9xl`} style={style}>
      {title}
    </div>
  )
}

export default SectionTitle