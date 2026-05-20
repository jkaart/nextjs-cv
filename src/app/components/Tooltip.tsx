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
 * @interface TooltipProps - Props interface for Tooltip component
 * @param {TooltipProps} props.content - The JSX element to display inside the tooltip when hovered, can be any valid React node including text, elements, or complex layouts
 * @param {TooltipProps} props.children - The child element that triggers the tooltip on hover, typically an icon, button, or label
 * @param {TooltipProps} [props.testid] - Optional test ID string for the parent container, useful for testing and accessibility tools (e.g., 'skill-tooltip-1')
 *
 * @example Tooltip with text content
 * ```tsx
 * import Tooltip from './Tooltip'
 *
 * <Tooltip content={<span>Full name: John Doe</span>}>
 *   <button>John D.</button>
 * </Tooltip>
 * // Output: Button shows "John D.", hovering displays tooltip with full name
 * ```
 *
 * @example Tooltip with icon and description (skill display)
 * ```tsx
 * import Tooltip from './Tooltip'
 *
 * <Tooltip content={
 *   <div className='flex flex-col'>
 *     <span>JavaScript</span>
 *     <span className='text-sm text-gray-500'>Frontend & Backend development</span>
 *   </div>
 * }>
 *   <span>JS</span>
 * </Tooltip>
 * // Output: Shows "JS" icon, tooltip displays language name and description on hover
 * ```
 *
 * @example Rendering skill tooltips with test IDs for testing
 * ```tsx
 * import Tooltip from './Tooltip'
 *
 * const SkillTooltips = () => (
 *   <div className="flex gap-3">
 *     <Tooltip content={<span>Erinomainen taito</span>} testid='skill-tooltip-js'>
 *       <span className='text-green-500'>★</span>
 *     </Tooltip>
 *
 *     <Tooltip content={<span>Hyvä taito</span>} testid='skill-tooltip-react'>
 *       <span className='text-blue-500'>⚛️</span>
 *     </Tooltip>
 *   </div>
 * )
 * ```
 *
 * @example Complete skills section with multiple tooltips (Finnish context)
 * ```tsx
 * import Tooltip from './Tooltip'
 *
 * const SkillsSection = () => (
 *   <section className="mb-8">
 *     <h3>Taidot</h3>
 *     <div className="flex flex-wrap gap-2">
 *       {// Frontend skills}
 *       <Tooltip content={<span>React - Erinomainen</span>} testid='skill-react'>
 *         <span>⚛️</span>
 *       </Tooltip>
 *
 *       <Tooltip content={<span>TypeScript - Hyvä</span>} testid='skill-ts'>
 *         <span>TS</span>
 *       </Tooltip>
 *
 *       {// Backend skills }
 *       <Tooltip content={<span>Node.js - Erinomainen</span>} testid='skill-nodejs'>
 *         <span>NJ</span>
 *       </Tooltip>
 *
 *       <Tooltip content={<span>Python - Hyvä</span>} testid='skill-python'>
 *         <span>PY</span>
 *       </Tooltip>
 *     </div>
 *   </section>
 * )
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
