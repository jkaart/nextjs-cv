import type { ProjectMetadata } from '@utils/projects'
import { useEffect, useState } from 'react'

const useProjects = (limit?: number) => {
  const [projects, setProjects] = useState<ProjectMetadata[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch(limit && limit > 0 ? `/api/projects?limit=${limit}` : '/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(JSON.parse(data))
        setLoading(false)
      })
  }, [limit])

  return { projects, loading }
}

export default useProjects
