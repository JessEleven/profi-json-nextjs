'use client'
import Loading from '@/components/loading'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { arta } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import json from '../resources/example.json'

export default function LandingPage () {
  const [isSplashDone, setIsSplashDone] = useState(false)

  const handleSplashFinish = () => {
    setIsSplashDone(true)
  }

  return (
    <main>
      {!isSplashDone &&
        (
          <Loading onFinish={handleSplashFinish} />
        )}

      {isSplashDone &&
        (
          <div className='mainContent'>
            <Navbar />

            <section className='flex flex-col justify-center items-center'>
              <div className='rounded-full border border-neutral-800 mt-5 xl:mt-5 px-4 py-1 text-xs font-medium'>
                JessEleven 🎉
              </div>
              <h1 className='mt-5 text-center font-bold text-3xl md:text-4xl xl:text-5xl'>
                ProfiJSON made with <br /> <span>Next<span className='text-indigo-400 rounded-full'>.</span>JS</span> & <span className='text-transparent bg-clip-text bg-gradient-to-br from-neutral-800 to-indigo-400 leading-tight'>Clerk Auth</span>
              </h1>
            </section>

            <section className='flex flex-col justify-center items-center mx-4 md:mx-0 mt-5'>
              <h3 className='text-base md:text-xl text-center font-medium font-mono'>Easy to use.
                <span className='underline decoration-orange-400 decoration-wavy decoration-from-font underline-offset-4'> Accessible.</span> UI Modern.
              </h3>

              <section className='mt-10 w-full mx-auto md:w-[620px]'>
                <SyntaxHighlighter className='text-xs rounded-md' language='javascript' style={arta}>
                  {JSON.stringify(
                    json,
                    null,
                    2
                  )}
                </SyntaxHighlighter>
              </section>
            </section>

            <Footer />
          </div>
        )}
    </main>
  )
}
