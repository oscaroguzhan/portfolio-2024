"use client"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from '@/typing'
type Props = {
  pageInfo: PageInfo
}

const Hero: React.FC<Props> = ({ pageInfo }) => {
  const [text, count] = useTypewriter({
    words: [
      'Hi, This is Oscar',
      'Developer-who-loves-coding.tsx',
      '<ButLookingForNewChallenge />'
    ],
    loop: true,
    delaySpeed: 1000
  })
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 2.5
      }}
      className='h-screen flex flex-col items-center space-y-8 justify-center overflow-hidden text-center'>
      <BackgroundCircles />
      <Image src="/assets/oscar1.png" alt="Oscar profile picture" width={300} height={300} className='rounded-full relative mx-auto object-cover' />
      <div className='z-20'>
        <h2 className='text-slate-400 uppercase tracking-[12px] pb-2'>{pageInfo.role}</h2>
        <h1 className='text-3xl lg:text-5xl px-10 md:text-4xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#8e0de9' />
        </h1>

        <div className='pt-8 '>
          <Link href="#about">
            <button className='heroBtn'>About</button>
          </Link>
          <Link href="#experiences">
            <button className='heroBtn'>Experiences</button>
          </Link>
          <Link href="#skills">
            <button className='heroBtn'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='heroBtn'>Projects</button>
          </Link>
          <Link href="#contact">
            <button className='heroBtn'>Contact</button>
          </Link>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero