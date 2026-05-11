import type { Education } from '@types'
import { compareEducations, sortEducations } from '@utils/sortEducations'

describe('compareEducations', () => {
  const education1: Education = {
    id: '1',
    professionalTitle: 'Bachelor of Science',
    education: 'Computer Science',
    academy: 'University of Technology',
    degree: 'Perustutkinto',
    dateOfDecree: new Date('2020-01-01')
  }

  const education2: Education = {
    id: '2',
    professionalTitle: 'Master of Science',
    education: 'Computer Science',
    academy: 'University of Applied Sciences',
    degree: 'Ammattitutkinto',
    dateOfDecree: new Date('2015-05-30')
  }

  const educationSameDate: Education = {
    id: '3',
    professionalTitle: 'PhD',
    education: 'Mathematics',
    academy: 'University of Helsinki',
    degree: 'Yliopistotutkinto',
    dateOfDecree: new Date('2018-06-15')
  }

  it('returns positive value when b is newer than a', () => {
    const result = compareEducations(education1, education2)
    expect(result).toBeLessThan(0)
  })

  it('returns negative value when a is newer than b', () => {
    const result = compareEducations(education2, education1)
    expect(result).toBeGreaterThan(0)
  })

  it('returns zero when both have the same date', () => {
    const result = compareEducations(educationSameDate, educationSameDate)
    expect(result).toBe(0)
  })

  it('handles null dates gracefully', () => {
    const educationNull: Education = {
      ...education1,
      dateOfDecree: null as unknown as Date
    }

    expect(compareEducations(education1, educationNull)).toBeLessThan(0)
    expect(compareEducations(educationNull, education1)).toBeGreaterThan(0)
  })
})

describe('sortEducations', () => {
  const unsortedEducations: Education[] = [
    {
      id: '3',
      professionalTitle: 'PhD',
      education: 'Mathematics',
      academy: 'University of Helsinki',
      degree: 'Yliopistotutkinto',
      dateOfDecree: new Date('2018-06-15')
    },
    {
      id: '1',
      professionalTitle: 'Bachelor of Science',
      education: 'Computer Science',
      academy: 'University of Technology',
      degree: 'Perustutkinto',
      dateOfDecree: new Date('2020-01-01')
    },
    {
      id: '2',
      professionalTitle: 'Master of Science',
      education: 'Computer Science',
      academy: 'University of Applied Sciences',
      degree: 'Ammattitutkinto',
      dateOfDecree: new Date('2015-05-30')
    }
  ]

  const sortedEducations: Education[] = [
    {
      id: '1',
      professionalTitle: 'Bachelor of Science',
      education: 'Computer Science',
      academy: 'University of Technology',
      degree: 'Perustutkinto',
      dateOfDecree: new Date('2020-01-01')
    },
    {
      id: '3',
      professionalTitle: 'PhD',
      education: 'Mathematics',
      academy: 'University of Helsinki',
      degree: 'Yliopistotutkinto',
      dateOfDecree: new Date('2018-06-15')
    },
    {
      id: '2',
      professionalTitle: 'Master of Science',
      education: 'Computer Science',
      academy: 'University of Applied Sciences',
      degree: 'Ammattitutkinto',
      dateOfDecree: new Date('2015-05-30')
    }
  ]

  it('returns a sorted array with most recent education first', () => {
    const result = sortEducations(unsortedEducations)
    expect(result).toEqual(sortedEducations)
  })

  it('does not mutate the original array', () => {
    const originalCopy = [...unsortedEducations]
    sortEducations(unsortedEducations)
    expect(unsortedEducations).toEqual(originalCopy)
  })

  it('returns a new array with same length as input', () => {
    const result = sortEducations(unsortedEducations)
    expect(result.length).toBe(unsortedEducations.length)
  })

  it('handles empty array', () => {
    const result = sortEducations([])
    expect(result).toEqual([])
  })

  it('handles single element array', () => {
    const singleEducation: Education[] = [unsortedEducations[0]]
    const result = sortEducations(singleEducation)
    expect(result.length).toBe(1)
    expect(result[0]).toEqual(unsortedEducations[0])
  })

  it('handles array with two elements', () => {
    const twoEducations: Education[] = [
      unsortedEducations[2],
      unsortedEducations[0]
    ]
    const result = sortEducations(twoEducations)
    expect(result[0].dateOfDecree.getTime()).toBeGreaterThan(
      result[1].dateOfDecree.getTime()
    )
  })

  it('preserves all education properties after sorting', () => {
    const result = sortEducations(unsortedEducations)
    expect(result[0]).toHaveProperty('id')
    expect(result[0]).toHaveProperty('professionalTitle')
    expect(result[0]).toHaveProperty('education')
    expect(result[0]).toHaveProperty('academy')
    expect(result[0]).toHaveProperty('degree')
    expect(result[0]).toHaveProperty('dateOfDecree')
  })

  it('sorts correctly with multiple educations on the same date', () => {
    const sameDateEducation1: Education = {
      id: '4',
      professionalTitle: 'Bachelor of Arts',
      education: 'History',
      academy: 'University of Helsinki',
      degree: 'Ylioppilastutkinto',
      dateOfDecree: new Date('2019-03-15')
    }

    const sameDateEducation2: Education = {
      id: '5',
      professionalTitle: 'Master of Arts',
      education: 'Philosophy',
      academy: 'University of Turku',
      degree: 'Yliopistotutkinto',
      dateOfDecree: new Date('2019-03-15')
    }

    const mixedEducations: Education[] = [
      sameDateEducation2,
      unsortedEducations[1],
      sameDateEducation1
    ]
    const result = sortEducations(mixedEducations)

    // First should be the 2020 education (newest)
    expect(result[0].dateOfDecree).toEqual(new Date('2020-01-01'))
    // Last two should have same date, order between them is not guaranteed by sort
    const lastTwo = [result[1], result[2]]
    expect(
      lastTwo.every(
        education =>
          education.dateOfDecree.getTime() === new Date('2019-03-15').getTime()
      )
    ).toBe(true)
  })

  it('sorts correctly with dates spanning multiple years', () => {
    const pastEducation: Education = {
      id: '6',
      professionalTitle: 'Associate Degree',
      education: 'Business',
      academy: 'College of Business',
      degree: 'Ylioppilastutkinto',
      dateOfDecree: new Date('2010-07-20')
    }

    const futureEducation: Education = {
      id: '7',
      professionalTitle: 'Doctorate',
      education: 'Physics',
      academy: 'Institute of Physics',
      degree: 'Yliopistotutkinto',
      dateOfDecree: new Date('2030-12-31')
    }

    const mixedEducations: Education[] = [
      pastEducation,
      unsortedEducations[0],
      futureEducation
    ]
    const result = sortEducations(mixedEducations)

    expect(result[0].dateOfDecree).toEqual(new Date('2030-12-31')) // Future first
    expect(result[1].dateOfDecree).toEqual(new Date('2018-06-15')) // Middle
    expect(result[2].dateOfDecree).toEqual(new Date('2010-07-20')) // Past last
  })

  it('handles edge case with very old dates', () => {
    const ancientEducation: Education = {
      id: '8',
      professionalTitle: 'Early Degree',
      education: 'Classics',
      academy: 'Ancient University',
      degree: 'Yliopistotutkinto',
      dateOfDecree: new Date('1900-01-01')
    }

    const result = sortEducations([ancientEducation, unsortedEducations[0]])
    expect(result[0].dateOfDecree).toEqual(new Date('2018-06-15')) // Newer first
  })

  it('handles edge case with very recent dates', () => {
    const recentEducation: Education = {
      id: '9',
      professionalTitle: 'Recent Degree',
      education: 'Engineering',
      academy: 'Modern Institute',
      degree: 'Yliopistotutkinto',
      dateOfDecree: new Date('2035-12-31')
    }

    const result = sortEducations([recentEducation, unsortedEducations[0]])
    expect(result[0].dateOfDecree).toEqual(new Date('2035-12-31')) // Newest first
  })
})
