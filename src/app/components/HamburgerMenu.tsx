interface HamburgerMenuProps {
  state: boolean
  onClick: () => void
}

const HamburgerMenu = ({ state, onClick }: HamburgerMenuProps) => {
  return (
    <div
      className={`absolute -top-18 mx-1 lg:hidden ${state && 'flex -left-2 -top-20 py-2 px-2 z-50 w-full bg-background'}`}
    >
      <button onClick={onClick} className='flex flex-col gap-1.5' type='button'>
        <span
          className={`h-1 w-6 bg-black transition-all ${state && 'rotate-45 translate-y-2.5'}`}
        ></span>
        <span
          className={`h-1 w-6 bg-black transition-all ${state && 'opacity-0'}`}
        ></span>
        <span
          className={`h-1 w-6 bg-black transition-all ${state && '-rotate-45 -translate-y-2.5'}`}
        ></span>
      </button>
    </div>
  )
}

export default HamburgerMenu
