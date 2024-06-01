"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Skill as SkillType } from '@/typing'
import { urlFor } from '@/sanity'
type Props = {
  skill: SkillType
}

function Skill({ skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
      <motion.img
        initial={{
          y: -200, opacity: 0
        }}
        transition={{
          duration: .8
        }}
        whileInView={{
          y: 0, opacity: 1
        }}
        src={urlFor(skill?.image).url()} alt=''
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 group-hover:grayscale hover:bg-slate-200 ease-out'
        />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold tracking-wide opacity-100 text-black'>{skill?.progress} %</p>
        </div>
      </div>
    </div>
  )
}

export default Skill