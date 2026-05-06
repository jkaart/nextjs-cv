import { Text, View } from '@react-pdf/renderer'
import type { Hobby } from '@types'
import { formatString } from '@utils/formatString'

interface PDFHobbiesProps {
  hobbies: Hobby[]
}

const PDFHobbies = ({ hobbies }: PDFHobbiesProps) => (
  <View>
    <Text>{formatString(hobbies)}</Text>
  </View>
)

export default PDFHobbies
