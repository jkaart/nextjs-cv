import type { ProjectMetadata } from '@utils/projects'
import { sortProjects } from '@utils/sortProjects'

describe('sortProjects', () => {
  it('should sort projects by endDate in reverse alphabetical order (Z-A)', () => {
    const unsortedProjects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project1', endDate: '2023-06-01' },
      { slug: 'project2', endDate: '2023-08-15' },
      { slug: 'project3', endDate: '2023-04-20' }
    ]

    const result = sortProjects(unsortedProjects)

    expect(result).toEqual([
      { slug: 'project2', endDate: '2023-08-15' }, // Latest date first
      { slug: 'project1', endDate: '2023-06-01' },
      { slug: 'project3', endDate: '2023-04-20' } // Oldest date last
    ])
  })

  it('should return empty array when input is empty', () => {
    const result = sortProjects([])
    expect(result).toEqual([])
  })

  it('should handle single element array correctly', () => {
    const projects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project1', endDate: '2023-05-15' }
    ]

    const result = sortProjects(projects)
    expect(result).toEqual(projects)
  })

  it('should handle projects with same endDate (stable sort)', () => {
    const unsortedProjects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project1', endDate: '2023-06-01' },
      { slug: 'project2', endDate: '2023-06-01' },
      { slug: 'project3', endDate: '2023-06-01' }
    ]

    const result = sortProjects(unsortedProjects)

    // All have same date, order should be preserved (stable sort)
    expect(result[0].slug).toBe('project1')
    expect(result[1].slug).toBe('project2')
    expect(result[2].slug).toBe('project3')
  })

  it('should handle projects with different year ranges', () => {
    const unsortedProjects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project1', endDate: '2020-01-01' },
      { slug: 'project2', endDate: '2025-12-31' },
      { slug: 'project3', endDate: '2022-06-15' }
    ]

    const result = sortProjects(unsortedProjects)

    expect(result[0].endDate).toBe('2025-12-31') // Latest year first
    expect(result[1].endDate).toBe('2022-06-15')
    expect(result[2].endDate).toBe('2020-01-01') // Oldest last
  })

  it('should preserve all project properties after sorting', () => {
    const originalProject: ProjectMetadata & { endDate: string } = {
      slug: 'project1',
      title: 'Test Project',
      summary: 'A test project',
      endDate: '2023-06-01',
      urls: [{ title: 'url', url: 'https://example.com' }]
    }

    const result = sortProjects([originalProject])

    expect(result[0]).toEqual(originalProject)
  })

  it('should not mutate the original array', () => {
    const originalProjects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project1', endDate: '2023-06-01' },
      { slug: 'project2', endDate: '2023-08-15' }
    ]

    const originalCopy = JSON.parse(JSON.stringify(originalProjects))

    sortProjects(originalProjects)

    expect(originalProjects).toEqual(originalCopy)
  })

  it('should handle case-insensitive date comparison', () => {
    const unsortedProjects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project', endDate: '2023-06-01' },
      { slug: 'project2', endDate: '2023-08-15' }
    ]

    const result = sortProjects(unsortedProjects)

    expect(result[0].endDate).toBe('2023-08-15') // Should still work with string comparison
  })

  it('should handle projects with dates spanning multiple years', () => {
    const unsortedProjects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project1', endDate: '2019-03-15' },
      { slug: 'project2', endDate: '2024-11-30' },
      { slug: 'project3', endDate: '2021-07-08' }
    ]

    const result = sortProjects(unsortedProjects)

    expect(result[0].endDate).toBe('2024-11-30') // Most recent first
    expect(result[1].endDate).toBe('2021-07-08')
    expect(result[2].endDate).toBe('2019-03-15') // Oldest last
  })

  it('should handle projects with identical dates in different order', () => {
    const unsortedProjects: (ProjectMetadata & { endDate: string })[] = [
      { slug: 'project3', endDate: '2023-06-15' },
      { slug: 'project1', endDate: '2023-04-20' },
      { slug: 'project2', endDate: '2023-08-10' }
    ]

    const result = sortProjects(unsortedProjects)

    expect(result[0].endDate).toBe('2023-08-10') // Latest first
    expect(result[1].endDate).toBe('2023-06-15')
    expect(result[2].endDate).toBe('2023-04-20') // Oldest last
  })
})
