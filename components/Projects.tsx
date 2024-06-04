"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Project } from '@/typing'
import { urlFor } from '@/sanity'
type Props = {
  title: String,
  projects: Project[]
}

function Projects({ title, projects }: Props) {
  
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h2 className='title'>{title}</h2>

      <div className='z-20 relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory w-full lg:mt-20 scrollbar scrollbar-track-[#21253c] scrollbar-thumb-yellow-600'>
        {projects?.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen lg:p-60 xl:p-80 2xl:p-96 ' key={project._id}>
            <motion.div
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className='mt-28 w-[320px]'
            >
              <Image
                src={urlFor(project.image).url()} alt="project-img" width={480} height={360} className=' w-full h-[420px]'/>
            </motion.div>
            <div className='space-y-10 px-0 md:px-10 max-w-7xl'>
              <h4 className='text-2xl opacity-90 text-center tracking-wide'>
                <span className='underline decoration-green-400'>Project {i + 1} of {projects.length}
                </span> : {project.title}
              </h4>
              <p className='text-slate-300 md:text-left text-center'>{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute h-[500px] bg-slate-800 top-[25%] left-0 -skew-y-12 z-0 md:top-[20%]' />
    </motion.div>
  )
}

export default Projects