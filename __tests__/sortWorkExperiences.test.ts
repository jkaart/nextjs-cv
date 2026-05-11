import type { WorkExperience } from '@types'
import { sortWorkExperiences } from '@utils/sortWorkExperiences'

describe('sortWorkExperiences', () => {
  const workExperiencesData: WorkExperience[] = [
    {
      id: '1',
      title: 'Junior Developer',
      workplaceName: 'Company A',
      job: 'Web development',
      startDate: new Date('2020-01-15'),
      endDate: new Date('2022-06-30')
    },
    {
      id: '2',
      title: 'Senior Developer',
      workplaceName: 'Company B',
      job: 'Full-stack development',
      startDate: new Date('2018-03-01'),
      endDate: new Date('2020-01-14')
    },
    {
      id: '3',
      title: 'Team Lead',
      workplaceName: 'Company C',
      job: 'Leadership role',
      startDate: new Date('2022-07-01'),
      endDate: new Date('2023-09-10')
    }
  ]

  const sortedWorkExperiences = [
    {
      id: '3',
      title: 'Team Lead',
      workplaceName: 'Company C',
      job: 'Leadership role',
      startDate: new Date('2022-07-01'),
      endDate: new Date('2023-09-10')
    },
    {
      id: '1',
      title: 'Junior Developer',
      workplaceName: 'Company A',
      job: 'Web development',
      startDate: new Date('2020-01-15'),
      endDate: new Date('2022-06-30')
    },
    {
      id: '2',
      title: 'Senior Developer',
      workplaceName: 'Company B',
      job: 'Full-stack development',
      startDate: new Date('2018-03-01'),
      endDate: new Date('2020-01-14')
    }
  ]

  describe('sortWorkExperiences', () => {
    it('returns sorted array with most recent work experience first', () => {
      const result = sortWorkExperiences(workExperiencesData)
      expect(result).toEqual(sortedWorkExperiences)
    })

    it('returns empty array if input is empty', () => {
      const result = sortWorkExperiences([])
      expect(result).toEqual([])
    })

    it('returns single item array unchanged', () => {
      const data: WorkExperience[] = [workExperiencesData[0]]
      expect(sortWorkExperiences(data)).toEqual(data)
    })

    it('does not mutate original array', () => {
      const copy = [...workExperiencesData]
      sortWorkExperiences(workExperiencesData)
      expect(workExperiencesData).toEqual(copy)
    })

    it('returns array sorted in descending order by startDate', () => {
      const result = sortWorkExperiences(workExperiencesData)

      for (let index = 1; index < result.length; index++) {
        const prevStartDate = result[index - 1].startDate.getTime()
        const currStartDate = result[index].startDate.getTime()

        expect(prevStartDate >= currStartDate).toBe(true)
      }
    })

    it('handles work experiences with same startDate', () => {
      const data: WorkExperience[] = [
        {
          id: '1',
          title: 'Job A',
          workplaceName: 'Company A',
          job: 'Role A',
          startDate: new Date('2020-06-01'),
          endDate: new Date('2021-01-01')
        },
        {
          id: '2',
          title: 'Job B',
          workplaceName: 'Company B',
          job: 'Role B',
          startDate: new Date('2020-06-01'),
          endDate: new Date('2022-08-10')
        }
      ]

      const result = sortWorkExperiences(data)
      expect(result[0].startDate.getTime()).toBe(
        new Date('2020-06-01').getTime()
      )
    })

    it('handles work experiences with null endDate', () => {
      const data: WorkExperience[] = [
        {
          id: '1',
          title: 'Current Job',
          workplaceName: 'Company A',
          job: 'Role A',
          startDate: new Date('2023-01-01'),
          endDate: null as unknown as Date
        },
        {
          id: '2',
          title: 'Previous Job',
          workplaceName: 'Company B',
          job: 'Role B',
          startDate: new Date('2020-06-01'),
          endDate: new Date('2023-01-01')
        }
      ]

      const result = sortWorkExperiences(data)
      expect(result[0].title).toBe('Current Job')
    })

    it('returns new array each time (pure function)', () => {
      const data: WorkExperience[] = [
        workExperiencesData[1],
        workExperiencesData[2]
      ]
      const result1 = sortWorkExperiences(data)
      const result2 = sortWorkExperiences(data)

      expect(result1).not.toBe(result2)
      expect(result1.length).toBe(2)
    })

    it('sorts by startDate regardless of endDate', () => {
      const data: WorkExperience[] = [
        {
          id: '1',
          title: 'Job A',
          workplaceName: 'Company A',
          job: 'Role A',
          startDate: new Date('2020-06-01'),
          endDate: null as unknown as Date
        },
        {
          id: '2',
          title: 'Job B',
          workplaceName: 'Company B',
          job: 'Role B',
          startDate: new Date('2018-03-01'),
          endDate: new Date('2025-12-31')
        }
      ]

      const result = sortWorkExperiences(data)
      expect(result[0].title).toBe('Job A') // 2020 comes after 2018
    })
  })
})
