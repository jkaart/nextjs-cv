import { Image, Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import remarkMdx from 'remark-mdx'
import remarkParse from 'remark-parse'
import { unified } from 'unified'

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 11,
    lineHeight: 1.5
  },

  h1: { fontSize: 24, marginBottom: 12 },
  h2: { fontSize: 18, marginBottom: 10 },
  h3: { fontSize: 14, marginBottom: 8 },

  p: { marginBottom: 8 },

  strong: { fontWeight: 700 },
  em: { fontStyle: 'italic' },

  list: { marginBottom: 8, paddingLeft: 12 },
  li: { marginBottom: 4, flexDirection: 'row' },

  codeBlock: {
    fontFamily: 'Courier',
    fontSize: 9,
    backgroundColor: '#eee',
    padding: 6,
    marginBottom: 8
  },

  inlineCode: {
    fontFamily: 'Courier',
    fontSize: 9
  },

  blockquote: {
    borderLeft: '3px solid #999',
    paddingLeft: 10,
    marginBottom: 8
  },

  link: {
    color: 'blue',
    textDecoration: 'underline'
  },

  image: {
    marginBottom: 10,
    maxWidth: '100%'
  }
})

type MarkdownNode = {
  type: string
  value?: string
  url?: string
  depth?: number
  ordered?: boolean
  index?: number
  position?: { start?: { offset?: number } }
  children?: MarkdownNode[]
}

/**
 * Recursively renders inline Markdown nodes into React elements.
 * Handles text, strong, emphasis, inline code, and links by applying appropriate styles.
 *
 * @param nodes - Array of MarkdownNode objects representing the inline content tree
 * @returns Array of React.ReactNode elements ready for rendering in a Text component
 *
 * @example
 * ```typescript
 * const nodes: MarkdownNode[] = [
 *   { type: 'text', value: 'Hello' },
 *   { type: 'strong', children: [{ type: 'text', value: '**bold**' }] },
 *   { type: 'emphasis', children: [{ type: 'text', value: '*italic*' }] },
 *   { type: 'inlineCode', value: '`code`' },
 *   { type: 'link', url: 'https://example.com', children: [{ type: 'text', value: 'click here' }] }
 * ]
 *
 * const elements = renderInline(nodes)
 * // Returns: ['Hello', <Text style={styles.strong}>bold</Text>, ...]
 * ```
 */
const renderInline = (nodes: MarkdownNode[]): React.ReactNode[] => {
  return nodes.flatMap((node, i) => {
    switch (node.type) {
      case 'text':
        return node.value

      case 'strong':
        return (
          <Text
            key={node.position?.start?.offset ?? node.value ?? i}
            style={styles.strong}
          >
            {renderInline(node.children ?? [])}
          </Text>
        )

      case 'emphasis':
        return (
          <Text
            key={node.position?.start?.offset ?? node.value ?? i}
            style={styles.em}
          >
            {renderInline(node.children ?? [])}
          </Text>
        )

      case 'inlineCode':
        return (
          <Text
            key={node.position?.start?.offset ?? node.value ?? i}
            style={styles.inlineCode}
          >
            {node.value}
          </Text>
        )

      case 'link':
        return (
          <Link
            key={node.position?.start?.offset ?? node.value ?? i}
            src={node.url}
            style={styles.link}
          >
            {renderInline(node.children ?? [])}
          </Link>
        )

      default:
        return ''
    }
  })
}

/**
 * Recursively renders a Markdown node tree into React elements for PDF rendering.
 * Handles all major Markdown block elements including headings, paragraphs, lists,
 * block quotes, code blocks, images, and thematic breaks.
 *
 * @param node - The root MarkdownNode to render (typically of type 'root')
 * @param key - Optional unique key for React reconciliation
 * @returns Single React.ReactNode element or array of elements
 *
 * @example
 * ```typescript
 * const tree: MarkdownNode = {
 *   type: 'root',
 *   children: [
 *     { type: 'heading', depth: 1, children: [{ type: 'text', value: '# Title' }] },
 *     { type: 'paragraph', children: [
 *       { type: 'text', value: 'This is a ' },
 *       { type: 'strong', children: [{ type: 'text', value: '**bold**' }] }
 *     ]},
 *     { type: 'list', ordered: true, children: [
 *       { type: 'listItem', index: 0, children: [{ type: 'text', value: 'First item' }] },
 *       { type: 'listItem', index: 1, children: [{ type: 'text', value: 'Second item' }] }
 *     ]}
 *   ]
 * }
 *
 * const elements = renderNode(tree)
 * // Returns React elements ready for PDF rendering
 * ```
 */
const renderNode = (node: MarkdownNode, key?: number): React.ReactNode => {
  switch (node.type) {
    case 'root':
      return (node.children ?? []).map((child: MarkdownNode, i: number) =>
        renderNode(child, i)
      )

    case 'heading': {
      const style =
        node.depth === 1 ? styles.h1 : node.depth === 2 ? styles.h2 : styles.h3

      return (
        <Text key={key} style={style}>
          {renderInline(node.children ?? [])}
        </Text>
      )
    }

    case 'paragraph':
      return (
        <Text key={key} style={styles.p}>
          {renderInline(node.children ?? [])}
        </Text>
      )

    case 'list':
      return (
        <View key={key} style={styles.list}>
          {(node.children ?? []).map((child: MarkdownNode, i: number) =>
            renderNode({ ...child, ordered: node.ordered, index: i }, i)
          )}
        </View>
      )

    case 'listItem': {
      const bullet = node.ordered ? `${(node.index ?? 0) + 1}. ` : '• '

      return (
        <View key={key} style={styles.li}>
          <Text>{bullet}</Text>
          <Text>{renderInline(node.children ?? [])}</Text>
        </View>
      )
    }

    case 'blockquote':
      return (
        <View key={key} style={styles.blockquote}>
          {(node.children ?? []).map((child: MarkdownNode, i: number) =>
            renderNode(child, i)
          )}
        </View>
      )

    case 'code':
      return (
        <Text key={key} style={styles.codeBlock}>
          {node.value}
        </Text>
      )

    case 'image':
      return <Image key={key} src={node.url} style={styles.image} />

    case 'thematicBreak':
      return (
        <View
          key={key}
          style={{ borderBottom: '1px solid #ccc', marginBottom: 8 }}
        />
      )

    default:
      return null
  }
}

/**
 * Normalizes a raw Markdown AST node into a typed MarkdownNode object.
 * Recursively processes the tree to ensure consistent structure and types.
 * Handles null values, type coercion, and array mapping for children nodes.
 *
 * @param node - The raw node from remark-mdx parser (can be any object or primitive)
 * @returns A normalized MarkdownNode with proper typing and structure
 *
 * @example
 * ```typescript
 * const rawNode = {
 *   type: 'paragraph',
 *   children: [
 *     { type: 'text', value: 'Hello' },
 *     { type: 'strong', children: [{ type: 'text', value: '**world**' }] }
 *   ]
 * }
 *
 * const normalized = normalizeNode(rawNode)
 * // Returns properly typed MarkdownNode with all fields initialized
 * ```
 */
const normalizeNode = (node: unknown): MarkdownNode => {
  if (typeof node !== 'object' || node === null) {
    return {} as MarkdownNode
  }
  const n = node as Record<string, unknown>
  const normalized: MarkdownNode = {
    type: typeof n.type === 'string' ? n.type : '',
    ...n,
    ordered: typeof n.ordered === 'boolean' ? n.ordered : undefined,
    children: Array.isArray(n.children)
      ? n.children.map(normalizeNode)
      : undefined
  }
  return normalized
}

/**
 * Props interface for the PDFDescription component.
 *
 * @interface
 */
interface PDFDescriptionProps {
  /** Markdown content to be rendered as a PDF description */
  mdx: string
}

/**
 * A React PDF component that renders MDX/Markdown content using react-pdf/renderer.
 * Parses and transforms Markdown syntax into styled PDF elements including headings,
 * paragraphs, lists, code blocks, images, links, and block quotes. Uses remark-mdx for parsing
 * and unified for AST processing to convert raw markdown into typed nodes for rendering.
 * 
 * @component
 * 
 * @example Basic usage with simple text content
 * ```typescript
 * import PDFDescription from './PDFDescription'
 * 
 * const App = () => (
 *   <PDFDescription mdx={`# Hello World

 * This is a **bold** and *italic* paragraph.
 * `} />
 * )
 * ```
 * 
 * @example With lists and code blocks
 * ```typescript
 * import PDFDescription from './PDFDescription'
 * 
 * const App = () => (
 *   <PDFDescription mdx={`# Features

 * - Feature one
 * - Feature two
 * - Feature three

 * \`\`\`javascript
 * console.log('Hello, World!')
 * \`\`\`
 * `} />
 * )
 * ```
 * 
 * @example With images and links
 * ```typescript
 * import PDFDescription from './PDFDescription'
 * 
 * const App = () => (
 *   <PDFDescription mdx={`# Documentation

 * [Visit our website](https://example.com) for more info.

 * ![Logo](/images/logo.png)
 * `} />
 * )
 * ```
 */
const PDFDescription = ({ mdx }: PDFDescriptionProps) => {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(mdx)
  const normalizedTree = normalizeNode(tree)

  return <View>{renderNode(normalizedTree)}</View>
}

export default PDFDescription
