import * as dataModule from '@data/data'
import { validateRawSkills } from '@utils/validators'

const rawData =
  (dataModule as { rawData?: { skill?: unknown[] } }).rawData ??
  (dataModule as { default?: { rawData?: { skill?: unknown[] } } }).default
    ?.rawData ??
  (dataModule as { default?: { skill?: unknown[] } }).default
if (!rawData || !Array.isArray(rawData.skill)) {
  throw new Error(
    'Unable to resolve rawData.skill from @data/data. Expected either a named rawData export or a default export containing the raw data.'
  )
}

console.log('Validate rawData.skill')

validateRawSkills(rawData.skill as readonly { iconName: unknown }[])

console.log(`Validated ${rawData.skill.length} skills`)
