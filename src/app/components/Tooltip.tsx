'use client'
import { type JSX, useState } from 'react'

interface TooltipProps {
  content: JSX.Element
  children: JSX.Element
}

const Tooltip = ({ children, content }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  return (
    <div
      className='relative'
      role="tooltip"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div>
        {children}
      </div>
      {showTooltip &&
        (<div className='dark:bg-white dark:text-black text-sm absolute z-50 top-full left-1/2 -translate-x-1/2 border border-black dark:border-white w-max flex flex-col p-2'>{content}</div>
        )}
    </div>
  )
}

export default Tooltip
