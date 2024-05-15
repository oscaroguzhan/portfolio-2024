"use client"
import React from 'react'
import { motion } from 'framer-motion'
type Props = {
  title: String
}

function Projects({ title }: Props) {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{ opacity: 1 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h2 className='title'>{title}</h2>

      <div className='z-20 relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory w-full lg:mt-20 scrollbar scrollbar-track-[#21253c] scrollbar-thumb-yellow-600'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen lg:p-60 xl:p-80 2xl:p-96 ' key={i}>
            <motion.img
              initial={{ opacity: 0, y: -300 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src="/assets/project1.png" alt="project-img" />
            <div className='space-y-10 px-0 md:px-10 max-w-7xl'>
              <h4 className='text-2xl opacity-90 text-center tracking-wide'>
                <span className='underline decoration-green-400'>Project {i + 1} of {projects.length}
                </span> : Vue3-Task tracker
              </h4>
              <p className='text-slate-300 md:text-left text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi exercitationem maxime temporibus praesentium veniam totam rem, blanditiis qui impedit culpa velit tenetur assumenda eos. Recusandae obcaecati similique fugiat maxime reprehenderit?</p>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full absolute h-[500px] bg-slate-800 top-[25%] left-0 -skew-y-12 z-0 md:top-[20%]' />
    </motion.div>
  )
}

export default Projects