interface MdxLayoutProps {
  children: React.ReactNode
  className?: string
}

const MdxLayout = ({ children, className }: MdxLayoutProps) => {
  return <div className={className}>{children}</div>
}

export default MdxLayout
