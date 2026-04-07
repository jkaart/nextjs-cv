interface HamburgerMenuProps {
  state: boolean
  onClick: () => void
}

const HamburgerMenu = ({ state, onClick }: HamburgerMenuProps) => {
  return (
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
}

export default HamburgerMenu
