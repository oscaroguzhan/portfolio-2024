"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
type Props = {
}

function Skill({ }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.div
        initial={{
          y: -200, opacity: 0
        }}
        transition={{
          duration: .8
        }}
        whileInView={{
          y: 0, opacity: 1
        }}
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-36 xl:h-36 group-hover:grayscale hover:bg-slate-200 ease-out'
      >

        <Image src="/assets/react-svgrepo-com.svg" alt=''
          width={200} height={200}
        />
      </motion.div>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-36 xl:h-36 rounded-full object-cover z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-2xl font-bold tracking-wide opacity-100 text-black'>100 %</p>
        </div>
      </div>
    </div>
  )
}

export default Skill