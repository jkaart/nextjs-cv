import { data, type Skill } from "@/data/data"
import "devicon/devicon.min.css"
import SkillRatingsList from "./common/SkillRatingList"

interface FilteredSkill {
  excellent: Skill[]
  good: Skill[]
  poor: Skill[]
}

const Skills = () => {
  const frontend: FilteredSkill = {
    excellent: data.skills.filter(skill => skill.level === 'excellent' && skill.type === 'frontend'),
    good: data.skills.filter(skill => skill.level === 'good' && skill.type === 'frontend'),
    poor: data.skills.filter(skill => skill.level === 'poor' && skill.type === 'frontend')
  }

  const backend: FilteredSkill = {
    excellent: data.skills.filter(skill => skill.level === 'excellent' && skill.type === 'backend'),
    good: data.skills.filter(skill => skill.level === 'good' && skill.type === 'backend'),
    poor: data.skills.filter(skill => skill.level === 'poor' && skill.type === 'backend')
  }

  const both: FilteredSkill = {
    excellent: data.skills.filter(skill => skill.level === 'excellent' && skill.type === 'frontend/backend'),
    good: data.skills.filter(skill => skill.level === 'good' && skill.type === 'frontend/backend'),
    poor: data.skills.filter(skill => skill.level === 'poor' && skill.type === 'frontend/backend')
  }

  const other: FilteredSkill = {
    excellent: data.skills.filter(skill => skill.level === 'excellent' && skill.type === 'other'),
    good: data.skills.filter(skill => skill.level === 'good' && skill.type === 'other'),
    poor: data.skills.filter(skill => skill.level === 'poor' && skill.type === 'other')
  }


  return (
    <div className="border-2 rounded-md w-1/6">
      <h2 className="text-2xl">Taidot</h2>
      <SkillRatingsList label='Frontend' ratings={frontend} />
      <SkillRatingsList label='Backend' ratings={backend} />
      <SkillRatingsList label='Frontend/Backend' ratings={both} />
      <SkillRatingsList label='Muut' ratings={other} />
    </div>
  )
}

export default Skills
