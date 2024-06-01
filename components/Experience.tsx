import React from 'react'
import ExperienceCard from './ExperienceCard'
import type { Experience as ExperienceType} from '@/typing'

type Props = {
  title: String,
  
}

export default function Experience({ title}: Props) {

  return (
    <div className='flex h-screen flex-col relative overflow-hidden md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h2 className='title'>
      {title}
      </h2>
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-[#21253c] scrollbar-thumb-yellow-600'>
        {/* Experience card */}
        <ExperienceCard />
      </div>
    </div>
  )
}