import Navbar from '@/components/navbar'
import React from 'react'

export default function AboutPage () {
  return (
    <main>
      <Navbar />

      <section className='mt-12 flex flex-col justify-center items-center'>
        <div>Next.JS + Clerk Auth</div>
      </section>
    </main>
  )
}
