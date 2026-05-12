'use client'
import { type JSX, useState } from 'react'

interface TooltipProps {
  content: JSX.Element
  children: JSX.Element
  testid?: string
}

/**
 * Renders a tooltip component that displays content on hover.
 * Shows the provided content in an absolute positioned box above the children element.
 * Uses mouse enter/leave events to control tooltip visibility.
 * Supports dark mode with appropriate color scheme switching.
 * Includes data-testid attributes for testing and accessibility.
 *
 * @param props - Component props containing tooltip configuration
 * @param props.content - The JSX element to display inside the tooltip when hovered
 * @param props.children - The child element that triggers the tooltip on hover
 * @param props.testid - Optional test ID string for the parent container, useful for testing and accessibility tools
 *
 * @example
 * ```tsx
 * // Tooltip with text content
 * <Tooltip content={<span>Full name: John Doe</span>}>
 *   <button>John D.</button>
 * </Tooltip>
 *
 * // Tooltip with icon and description
 * <Tooltip content={
 *   <div className='flex flex-col'>
 *     <span>JavaScript</span>
 *     <span className='text-sm text-gray-500'>Frontend & Backend development</span>
 *   </div>
 * }>
 *   <span>JS</span>
 * </Tooltip>
 *
 * // With custom test ID for testing
 * <Tooltip content={<span>Expert level proficiency</span>} testid='skill-tooltip-1'>
 *   <span className='text-green-500'>★</span>
 * </Tooltip>
 * ```
 */
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
