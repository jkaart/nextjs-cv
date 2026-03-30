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

interface PDFDescriptionProps {
  mdx: string
}

const PDFDescription = ({ mdx }: PDFDescriptionProps) => {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(mdx)
  const normalizedTree = normalizeNode(tree)

  return <View>{renderNode(normalizedTree)}</View>
}

export default PDFDescription
