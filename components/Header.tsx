"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({ }: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-40 p-5 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex gap-4 items-center'>
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/oscar-wihlborg-erg%C3%BCn/" />
        <SocialIcon url="https://github.com/oscaroguzhan" />
        <SocialIcon url="https://www.facebook.com/oscaroguzhan" />
        <SocialIcon url="https://www.instagram.com/ergunoguzhan" />
        <SocialIcon url="https://www.codeguruozzy.com" />

      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex items-center gap-2'>
        <Link href="#contact" className='flex items-center justify-evenly space-x-2'>
            <SocialIcon network='email' className='' />
          <p className='uppercase hidden md:inline-flex'>Contact</p>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header