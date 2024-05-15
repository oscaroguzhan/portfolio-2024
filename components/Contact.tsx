"use client"
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {
  title: string,
}
type FormData = {
  name: string,
  email: string,
  subject: string,
  message: string
}

function Contact({ title }: Props) {
  // react-hook-form
  let {
    register,
    handleSubmit,
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => { window.location.href = `mailto:oscar.w.ergun@gmail?subject=${data.subject}&body=Hi My name is ${data.name} and ${data.message} ` }
  return (
    <div className='relative h-screen flex flex-col md:flex-row md:text-left text-center max-w-7xl px-10 mx-auto items-center justify-evenly'>
      <h2 className='title'>{title}</h2>

      <div className=''>
        <h3 className='text-3xl decoration-yellow-500 underline tracking-wide mb-6 text-center'>Let's have a talk </h3>
        <div className='space-y-4 mb-4'>
          <div className='flex items-center justify-evenly'>
            <PhoneIcon className='text-yellow-600 animate-pulse h-8 w-8' />
            <p>+46 76 652 61 26</p>
          </div>
          <div className='flex items-center justify-evenly'>
            <EnvelopeIcon className='text-yellow-600  h-8 w-8' />
            <p>oscar.w.ergun@gmail.com</p>
          </div>
          <div className='flex items-center justify-evenly'>
            <MapPinIcon className='text-yellow-600  h-8 w-8' />
            <p>Ängavångsgatan 115, 254 74, Ödåkra, Sweden</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto">
          <div className='flex space-x-4'>
            <input {...register('name', { required: true })} type="text" name="name" id="name" placeholder='Name' className='formInput' />
            <input {...register('email', { required: true })} type="email" name="email" id="email" className='formInput' placeholder='Email' />
          </div>
          <input {...register('subject')} type="text" name="subject" id="subject" placeholder='Subject' className='formInput' />
          < textarea {...register('message')} name="message" id="message" className='formInput' placeholder='Message' />
          <button type="submit"
            className='bg-[#f7AB0A] py-4 px-10 uppercase text-black font-bold tracking-wide text-md animate-pulse transition-all ease-in-out'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact