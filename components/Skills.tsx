import React from 'react'
import Skill from './Skill'
import { Skill as SkillType } from '@/typing'
import { motion } from 'framer-motion'

type Props = {
  title: String,
  skills: SkillType[]

}

function Skills({ title, skills }: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] min-h-screen mx-auto xl:px-10 justify-center items-center xl:space-y-0 '>
      <h2 className='title'>{title}</h2>
      <h3 className='text-slate-600 uppercase tracking-widest absolute top-36 text-sm md:text-md xl:text-lg'>Hover over a skill to see proficiency for the skill</h3>
      <div className='flex flex-wrap justify-center items-center  mt-24 md:mt-6 gap-2'>
        {skills?.map((skill) => (
          <Skill key={skill._id} skill={skill}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills