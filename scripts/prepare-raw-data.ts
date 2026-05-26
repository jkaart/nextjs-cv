import { rawData } from '@data/data'
import { validateRawSkills } from '@utils/validators'

console.log('Prepare rawData.skill')

validateRawSkills(rawData.skill)

console.log(`Prepared ${rawData.skill.length} skills`)
