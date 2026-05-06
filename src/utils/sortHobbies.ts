import type { Hobby } from '@types'

export const sortHobbies = (hobbies: Hobby[]) => {
  return [...hobbies].sort()
}
