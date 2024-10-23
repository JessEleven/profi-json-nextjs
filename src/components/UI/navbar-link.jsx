'use client'
import { useAuth, UserButton, useSession } from '@clerk/nextjs'
import { IconCircleFilled } from '@tabler/icons-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarLink () {
  const { isSignedIn, signOut } = useAuth()
  const { session } = useSession()
  const pathname = usePathname()

  const sessionExpiry = session?.expireAt
    ? new Date(session.expireAt).toLocaleDateString()
    : 'N/A'

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
                  <div className='flex items-center gap-x-0.5 bg-neutral-300 rounded-full py-0.5 px-2'>
                    <IconCircleFilled width={12} height={12} className='text-green-500' />
                    <h5 className='capitalize pb-[1px]'>{session?.status}</h5>
                  </div>

                  <span className='hidden lg:block w-[68px]'>
                    {`Expires on: ${sessionExpiry}`}
                  </span>

                  <span className='hidden lg:block'>
                    <UserButton />
                  </span>
                </div>
                )
              : (
                <nav>
                  <ul className='flex items-center gap-x-3'>
                    <li>
                      <Link href='/dashboard' className='btn-navbar-border'>
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
