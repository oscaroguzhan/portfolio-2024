"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

function ExperienceCard({ }: Props) {
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
      <Image src="/assets/me.jpeg" alt="experience-logo" width={124} height={124} />
      <div>
        <h4 className='uppercase text-2xl font-light'>Front-end / Full-stack Developer</h4>
        <p className='font-bold text-xl mt-1'>Zmarta </p>
        <div className='flex space-x-2 my-2'>
          <Image src="/assets/typescript-official-svgrepo-com.svg" alt="tech-logo" className='h-10' width={40} height={40} />
          <Image src="/assets/typescript-official-svgrepo-com.svg" alt="tech-logo" className='h-10' width={40} height={40} />
          <Image src="/assets/typescript-official-svgrepo-com.svg" alt="tech-logo" className='h-10' width={40} height={40} />
        </div>
        <p>Started at: .... Ended at:...</p>
        <ul className='list-disc space-y-4 ml-5 font-light'>
          <li>summary points Lorem, ipsumtas, voluptatese aliquid facilis blanditiis labors?</li>
          <li>summary points Lorem, ipsumtas, voluptatese aliquid facilis blanditiis labors?</li>
          <li>summary points Lorem, ipsumtas, voluptatese aliquid facilis blanditiis labors?</li>
        </ul>
      </div>
    </motion.section>
  )
}

export default ExperienceCard