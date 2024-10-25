import Link from 'next/link'
import NavbarLink from './UI/navbar-link'
import Image from 'next/image'
import MenuMobile from './UI/menu-mobile'

export default function Navbar () {
  return (
    <header className='flex items-center justify-between border-b border-neutral-400 mx-4 md:mx-10 xl:mx-40 h-[50px]'>
      <Link translate='no' href='/' className='flex items-center'>
        <Image
          src='/logo-app.png'
          alt='logo-app'
          width={32}
          height={32}
          priority
        />
        <h3 className='ml-1 text-lg md:text-xl font-bold'>ProfiJSON</h3>
      </Link>

      <section className='flex items-center gap-x-3'>
        <NavbarLink />

        <div className='block lg:hidden'>
          <MenuMobile />
        </div>
      </section>
    </header>
  )
}
