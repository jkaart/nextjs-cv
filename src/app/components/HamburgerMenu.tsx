interface HamburgerMenuProps {
  state: boolean
  onClick: () => void
}

/**
 * Component that renders a hamburger menu icon for mobile navigation.
 * The icon animates into an X shape when the menu is open (state=true).
 * On larger screens (lg breakpoint), the component is hidden by default.
 * Uses Tailwind CSS for styling and responsive behavior.
 *
 * @interface HamburgerMenuProps - Props interface for HamburgerMenu component
 * @param {boolean} props.state - Boolean indicating whether the menu is open or closed; controls animation state (true = X shape, false = hamburger)
 * @param {() => void} props.onClick - Callback function triggered when the hamburger icon is clicked to toggle menu visibility
 *
 * @example
 * ```tsx
 * // Basic usage with useState hook
 * const [isMenuOpen, setIsMenuOpen] = useState(false)
 * <HamburgerMenu
 *   state={isMenuOpen}
 *   onClick={() => setIsMenuOpen(!isMenuOpen)}
 * />
 *
 * // Usage in a navigation component
 * function Navigation() {
 *   const [isOpen, setIsOpen] = useState(false)
 *   return (
 *     <nav className="flex items-center">
 *       <HamburgerMenu state={isOpen} onClick={() => setIsOpen(!isOpen)} />
 *       <ul className={`ml-8 ${isOpen ? 'block' : 'hidden'} lg:block`}>
 *         <li><a href="/home">Home</a></li>
 *         <li><a href="/about">About</a></li>
 *         <li><a href="/contact">Contact</a></li>
 *       </ul>
 *     </nav>
 *   )
 * }
 * ```
 */
const HamburgerMenu = ({ state, onClick }: HamburgerMenuProps) => (
  <div
    data-testid='hamburger-menu'
    className={`absolute lg:hidden ${state ? 'flex top-0 py-2 px-2 z-50 w-full bg-background' : 'left-1 top-1'}`}
  >
    <button onClick={onClick} className='flex flex-col gap-1.5' type='button'>
      <span
        data-testid='hamburger-line'
        className={`h-1 w-6 bg-black transition-all ${state && 'rotate-45 translate-y-2.5'}`}
      ></span>
      <span
        data-testid='hamburger-line'
        className={`h-1 w-6 bg-black transition-all ${state && 'opacity-0'}`}
      ></span>
      <span
        data-testid='hamburger-line'
        className={`h-1 w-6 bg-black transition-all ${state && '-rotate-45 -translate-y-2.5'}`}
      ></span>
    </button>
  </div>
)

export default HamburgerMenu
