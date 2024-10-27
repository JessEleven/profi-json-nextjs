'use client'
import { getSessionExpiry, getSessionStatus } from '@/utils/session-helpers'
import { useAuth, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarLink () {
  const { isSignedIn, signOut } = useAuth()
  const pathname = usePathname()

  return (
    <section className='inline-flex gap-x-3 items-center text-xs font-medium'>
      {pathname === '/dashboard' ||
        (
          <Link className='hidden lg:block' href='/about'>About</Link>
        )}

      {isSignedIn
        ? (
          <>
            {pathname === '/dashboard'
              ? (
                <div className='flex items-center gap-x-3'>
                  <div className='hidden lg:block'>
                    {getSessionStatus()}
                  </div>

                  <div className='hidden lg:block w-[68px]'>
                    {getSessionExpiry()}
                  </div>

                  <div className='hidden lg:block'>
                    <UserButton />
                  </div>
                </div>
                )
              : (
                <nav>
                  <ul className='flex items-center gap-x-3'>
                    <li>
                      <Link href='/dashboard' className='hidden xl:block btn-navbar-border'>
                        Dashboard
                      </Link>
                    </li>
                    {pathname !== '/about' &&
                      (
                        <li className='hidden lg:block'>
                          <button type='button' onClick={() => signOut()} className='btn-navbar-bg text-neutral-50'>
                            Sign Out
                          </button>
                        </li>
                      )}
                  </ul>
                </nav>
                )}
          </>
          )
        : (
          <nav>
            <ul className='hidden lg:flex items-center gap-x-3'>
              <li>
                <Link className='btn-navbar-border' href='/sign-in'>
                  Log In
                </Link>
              </li>
              <li>
                <Link className='btn-navbar-bg text-neutral-50' href='/sign-up'>
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>
          )}
    </section>
  )
}
