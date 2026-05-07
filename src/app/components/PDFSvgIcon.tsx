import { Path, Svg } from '@react-pdf/renderer'

interface PathType {
  d: string
  fill: string | null
}

interface PDFSvgIconProps {
  viewBox: string
  paths: PathType[]
}

const PDFSvgIcon = ({ viewBox, paths }: PDFSvgIconProps) => {
  return (
    <Svg viewBox={viewBox}>
      {paths.map(path => (
        <Path
          key={path.d}
          d={path.d ? path.d : ''}
          fill={path.fill ? path.fill : 'black'}
        />
      ))}
    </Svg>
  )
}

export default PDFSvgIcon
