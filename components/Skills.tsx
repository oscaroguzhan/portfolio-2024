import React from 'react'
import Skill from './Skill'

type Props = {
  title: String,
  direction?: boolean
}

function Skills({ title, direction}: Props) {
  return (
    <div className='relative h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] mx-auto xl:px-10 justify-center items-center xl:space-y-0'>
      <h2 className='title'>{title}</h2>
      <h3 className='text-slate-600 uppercase tracking-widest absolute top-36 text-sm md:text-md xl:text-lg'>Hover over a skill to see proficiency for the skill</h3>
      <div className='grid grid-cols-4 gap-6'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  )
}

export default Skills