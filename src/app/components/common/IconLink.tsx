import type { IconType } from '@components/common/ContactIcon'
import ContactIcon from '@components/common/ContactIcon'
import Link from 'next/link'
import type { HTMLProps } from 'react'

interface IconLinkProps {
  href: string
  iconType: IconType
  className?: HTMLProps<HTMLElement>['className']
}

/**
 * Renders a clickable link with an icon that opens in a new tab.
 *
 * @param {IconLinkProps} props - Component props containing link configuration
 * @param {string} props.href - The URL to navigate to when clicked (e.g., "https://linkedin.com/in/john")
 * @param {IconType} props.iconType - The type of icon to display (e.g., 'github', 'linkedin', 'email')
 * @param {string} [props.className] - Optional additional CSS classes for styling
 *
 * @example
 * ```tsx
 * <IconLink href="https://github.com/john" iconType='github' />
 * <IconLink href="mailto:john@example.com" iconType='email' className='text-blue-500' />
 * <IconLink href="https://linkedin.com/in/john" iconType='linkedin' />
 * ```
 */
const IconLink = ({ href, iconType, className }: IconLinkProps) => {
  const testId = `react-icon-${iconType.toLowerCase()}`

  return (
    <Link
      className={className}
      data-testid='icon-link'
      target='_blank'
      href={href}
      rel='noopener noreferrer'
    >
      <div data-testid={testId}>
        <ContactIcon type={iconType} />
      </div>
    </Link>
  )
}

export default IconLink
