import React from 'react'

type Props = {}

export default function BackgroundCircles({ }: Props) {
  return (
    <div className="relative flex items-center justify-center">
      <div className='absolute border border-slate-300 rounded-full w-[200px] h-[200px] animate-ping mt-72' />
      <div className='absolute border border-slate-400 rounded-full w-[300px] h-[300px] animate-ping mt-72'/>
      <div className='absolute border border-slate-600 rounded-full w-[500px] h-[500px] animate-ping mt-72'/>
      <div className='absolute border border-slate-600 rounded-full w-[700px] h-[700px] animate-pulse mt-72 opacity-20'/>
    </div>
  )
}