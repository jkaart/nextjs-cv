'use client'
import { type JSX, useState } from 'react'

interface TooltipProps {
  content: JSX.Element
  children: JSX.Element
  testid?: string
}

const Tooltip = ({ children, content, testid }: TooltipProps) => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)
  return (
    <div
      className='relative'
      role='tooltip'
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      data-testid={testid}
    >
      <div data-testid='tooltip-children-container'>{children}</div>
      {showTooltip && (
        <div
          className='
          dark:bg-white
          dark:text-black
          bg-white
          text-sm
          absolute
          z-50
          top-full
          left-1/2
          -translate-x-1/2
          border
          border-black
          dark:border-white
          rounded-sm
          w-max
          flex
          flex-col
          p-2
          '
          data-testid='tooltip-content-container'
        >
          {content}
        </div>
      )}
    </div>
  )
}

export default Tooltip
