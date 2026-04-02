import { useEffect, useState } from 'react'
import type { ProjectMetadata } from '@/utils/projects'

const useProjects = () => {
  const [projects, setProjects] = useState<ProjectMetadata[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(JSON.parse(data))
        setLoading(false)
      })
  }, [])

  return { projects, loading }
}

export default useProjects
