import { StyleSheet, Text, View } from '@react-pdf/renderer'

interface PDFFooterProps {
  lastContentUpdate: string
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    fontSize: '8px',
    position: 'absolute',
    bottom: '10px',
    left: 0,
    right: 0,
    width: '100%'
  }
})

const PDFFooter = ({ lastContentUpdate }: PDFFooterProps) => {
  const now = new Date()
  const date = now.toLocaleDateString('fi-FI')

  return (
    <View style={styles.container}>
      <Text>Luotu: {date}</Text>
      <Text>Sisältö päivitetty: {lastContentUpdate}</Text>
    </View>
  )
}

export default PDFFooter
