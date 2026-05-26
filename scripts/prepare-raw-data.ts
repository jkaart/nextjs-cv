import { rawData } from '@data/data'
import { validateRawSkills } from '@utils/validators'

console.log('Validate rawData.skill')

validateRawSkills(rawData.skill)

console.log(`Validated ${rawData.skill.length} skills`)
