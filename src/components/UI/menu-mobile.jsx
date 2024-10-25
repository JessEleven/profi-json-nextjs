'use client'
import { useState } from 'react'
import { IconMenu2, IconX } from '@tabler/icons-react'
import Link from 'next/link'
import { useAuth, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { getSessionExpiry } from '@/utils/session-helpers'

export default function MenuMobile () {
  const [openBtn, setOpenBtn] = useState(false)
  const { isSignedIn, signOut } = useAuth()
  const { user } = useUser()
  const pathname = usePathname()

  const sessionExpiry = getSessionExpiry()

  return (
    <section>
      <button type='button' className='relative flex' onClick={() => setOpenBtn(!openBtn)}>
        {openBtn ? <IconX className='rounded-md border border-current' /> : <IconMenu2 />}
      </button>

      {openBtn &&
        (
          <div className='mainContent absolute h-fit border-b border-neutral-400 left-0 right-0 top-[50px] bottom-0 bg-neutral-200 px-4 md:px-10 pb-10 pt-5'>

            {(isSignedIn && pathname === '/dashboard') &&
              (
                <div className='space-y-2 flex flex-col mt-2.5'>
                  <div className='flex items-center justify-between'>
                    <div className='font-medium'>
                      <h3 className='text-sm'>{user.firstName} {user?.lastName}</h3>
                      <h3 className='text-xs'>{user?.primaryEmailAddress?.emailAddress}</h3>
                    </div>
                    <Image
                      className='rounded-full'
                      src={user?.imageUrl}
                      alt='d'
                      width={32}
                      height={32}
                    />
                  </div>
                  <span className='text-xs font-medium'>
                    {`Expires on: ${sessionExpiry}`}
                  </span>
                </div>
              )}

            <nav className='text-base font-medium mt-5'>
              <ul>
                <li className='mb-2.5'>
                  <Link href='/about'>About</Link>
                </li>
                <li>
                  <a href='https://github.com/JessEleven/profi-json-nextjs' rel='noreferrer' target='_blank'>
                    Repository
                  </a>
                </li>
              </ul>
            </nav>

            <div className='flex text-center gap-x-4 mt-5 text-xs font-medium'>
              {isSignedIn
                ? (
                  <>
                    {pathname !== '/dashboard' &&
                      (
                        <Link href='/dashboard' className='btn-navbar-border w-full'>Dashborad</Link>
                      )}

                    {(pathname !== '/' && pathname !== '/about') &&
                      (
                        <Link href='/' className='btn-navbar-border w-full'>Home</Link>
                      )}

                    <button type='button' onClick={() => signOut()} className='btn-navbar-bg w-full text-neutral-50'>
                      Sign Out
                    </button>
                  </>
                  )
                : (
                  <>
                    <Link className='btn-navbar-border w-full' href='/sign-in'>
                      Log In
                    </Link>
                    <Link className='btn-navbar-bg text-neutral-50 w-full' href='/sign-up'>
                      Sign Up
                    </Link>
                  </>
                  )}
            </div>
          </div>
        )}
    </section>
  )
}
