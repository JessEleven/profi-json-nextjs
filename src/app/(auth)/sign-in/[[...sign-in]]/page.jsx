import { SignIn } from '@clerk/nextjs'
import Link from 'next/link'

export default function Page () {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Link href='/' className='mb-5 px-4 py-1.5 text-xs font-medium rounded-md border border-orange-600'>Back to home</Link>
      <SignIn fallbackRedirectUrl='/dashboard' />
    </div>
  )
}
