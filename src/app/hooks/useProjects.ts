import type { ProjectMetadata } from '@types'
import { useEffect, useState } from 'react'

/**
 * Custom hook to fetch project metadata from the API.
 * Fetches all projects by default or a limited number of projects based on the limit parameter.
 *
 * @param {number} [limit] - Optional maximum number of projects to fetch. If provided and greater than 0, only that many projects will be returned. Defaults to fetching all projects.
 * @returns {{ projects: ProjectMetadata[], loading: boolean }} Object containing the fetched projects array and a loading state flag.
 *
 * @example
 * // Fetch all projects
 * const { projects, loading } = useProjects()
 *
 * @example
 * // Fetch only the latest 3 projects
 * const { projects, loading } = useProjects(3)
 */
const useProjects = (
  limit?: number
): { projects: ProjectMetadata[]; loading: boolean } => {
  const [projects, setProjects] = useState<ProjectMetadata[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(limit && limit > 0 ? `/api/projects?limit=${limit}` : '/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(JSON.parse(data))
      })
      .catch(error => {
        console.error('Error in projects fetching', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [limit])

  return { projects, loading }
}

export default useProjects
