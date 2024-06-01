"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import {PageInfo } from '@/typing'


interface Props {
  title:String,
  pageInfo: PageInfo,
}
const About:React.FC<Props> = ({title, pageInfo}) => {
  return (
    <div className='h-screen flex flex-col text-center relative md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h2 
      className='title'>{title}</h2>
      <motion.div
        initial={{
          opacity: 0,
          x: -200
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2
        }}
        className="md:flex md:mr-6 ">
        <Image src ="/assets/oscar2.png" alt="about-picture" width={288} height={288}
          className='-mb-20 flex-shrink-0 md:mb-0 rounded-full w-48 h-48 object-cover md:w-[300px] md:h-[300px] md:rounded-md xl:w-[400px] xl:h-[400px] xl:rounded-md' />
      </motion.div>
      <div className="space-y-6 px:0 md:px-6 md:flex-1">
        <h3 className='mb-6 text-md md:text-lg'>{pageInfo.backgroundInfo}</h3>
        <ul className='md:ml-6 flex flex-col space-y-4 lg:ml-8 lg-text-xl'>
          <li> ⭐️ Work proactively as an individual and as a flexible team member.
          </li>
          <li>
            ⭐️ Work as a team leader in the food industry
          </li>
          <li>⭐️ Social, curios, ambitious developer</li>
          <li>⭐️ A proud father of 3 wonderful kids </li>
        </ul>
      </div>
    </div>
  )
}

export default About