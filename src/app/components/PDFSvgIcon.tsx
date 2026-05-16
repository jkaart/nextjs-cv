import { Path, Svg } from '@react-pdf/renderer'

/**
 * SVG path definition for an individual icon element.
 * Each path contains a d attribute with the path data and fill color.
 */
interface PathType {
  /** SVG path data string defining the shape geometry */
  d: string
  /** Fill color, defaults to black if not provided */
  fill: string
}

interface PDFSvgIconProps {
  /** SVG viewBox string defining the coordinate system (e.g., "0 0 24 24") */
  viewBox: string
  /** Array of path definitions with d and fill properties */
  paths: PathType[]
}

/**
 * Renders an SVG icon using React PDF renderer components.
 * Maps through an array of path definitions and renders them within a viewBox container.
 * Paths are keyed by their d attribute for unique identification in the render tree.
 *
 * @param props - Component props containing viewBox and paths configuration
 * @param props.viewBox - SVG viewBox string defining the coordinate system (e.g., "0 0 24 24")
 * @param props.paths - Array of PathType objects, each with d (path data) and fill properties
 * @returns React element representing an Svg container with multiple Path elements
 *
 * @example
 * ```tsx
 * // Usage for a simple checkmark icon
 * const checkmarkPaths = [
 *   { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z', fill: '' }
 * ]
 * <PDFSvgIcon viewBox="0 0 24 24" paths={checkmarkPaths} />
 * ```
 *
 * @example
 * ```tsx
 * // Usage for a complex icon with multiple path segments
 * const starPaths = [
 *   { d: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z', fill: '' },
 *   { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', fill: 'none' }
 * ]
 * <PDFSvgIcon viewBox="0 0 24 24" paths={starPaths} />
 * ```
 */
const PDFSvgIcon = ({ viewBox, paths }: PDFSvgIconProps) => (
  <Svg viewBox={viewBox}>
    {paths.map(path => (
      <Path
        key={path.d}
        d={path.d ? path.d : ''}
        fill={path.fill === '' ? 'black' : path.fill}
      />
    ))}
  </Svg>
)

export default PDFSvgIcon
