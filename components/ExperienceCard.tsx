"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typing'
import { urlFor } from '@/sanity'
type Props = {
  experience: Experience
}

function ExperienceCard({ experience}: Props) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -100
      }}
      transition={{
        duration: 1.2
      }}
      whileInView={{
        opacity: 1, y: 0
      }}
      viewport={{ once: true }}
      className='flex flex-col items-center space-y-7 flex-shrink-0 snap-center w-[500px] md:w-[600px] xl:w-[900px] bg-slate-800 p-10 hover:bg-slate-900 transition-colors ease-out
      '> 
      <Image src={urlFor(experience?.companyImage).url()} alt="experience-logo" width={124} height={124} />
      <div>
        <h4 className='uppercase text-2xl font-light'>{experience.title}</h4>
        <p className='font-bold text-xl mt-1'>{experience.company} </p>
        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map((technique) => (
            <Image key={technique._id} src={urlFor(technique.image).url()} alt="tech-logo" className='h-10' width={40} height={40} />
          ))}
        </div>
        <p className='text-slate-500 my-4'>{new Date(experience?.dateStarted).toDateString()} - {new Date(experience?.dateEnded).toDateString()}</p>
        <ul className='list-disc space-y-4 ml-5 font-light'>
          {experience.details.map((detail) => (
            <li key={experience._id}>{detail}</li>
          ))}
        </ul>
      </div>
    </motion.section>
  )
}

export default ExperienceCard