'use client'
import Navbar from '@/components/navbar'
import { useUser } from '@clerk/nextjs'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function DashboardPage () {
  const { user } = useUser()

  return (
    <main>
      <Navbar />
      <main className='mx-4 xl:mx-0'>
        <h2 className='text-center text-2xl font-bold mt-5'>Welcome back</h2>
        <p className='text-center text-base font-medium mt-5'>
          Hello {user?.firstName} {user?.lastName} 👋. Your session is active
          <br />
          Your email address is {user?.primaryEmailAddress?.emailAddress}
        </p>

        <section className='my-10 px-2 pt-2 pb-2.5 rounded-lg bg-[#282A36] w-full mx-auto md:w-[600px] lg:w-[750px] xl:w-[900px]'>
          <SyntaxHighlighter language='javascript' style={dracula}>
            {JSON.stringify(
              user?.externalAccounts,
              null,
              2
            )}
          </SyntaxHighlighter>
        </section>
      </main>
    </main>
  )
}
