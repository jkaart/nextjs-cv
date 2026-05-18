import type { SelectedDevIconName } from '@selectedDevIconTypes'
import Image from 'next/image'
import type { HTMLProps } from 'react'

interface DevIconProps {
  name: SelectedDevIconName
  className?: HTMLProps<HTMLElement>['className']
}

const DevIcon = ({ name, className }: DevIconProps) => {
  return (
    <div className={className}>
      <Image
        src={`/assets/icons/png/dev-icons/${name}.png`}
        width={40}
        height={40}
        alt={name}
      />
    </div>
  )
}

export default DevIcon
