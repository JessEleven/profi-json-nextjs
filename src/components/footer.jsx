import {
  IconMinus,
  IconMinusVertical,
  IconBrandGithub
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='mt-5 pb-5 flex items-center justify-center font-medium'>
      <div className='w-[400px] py-2.5 flex-col md:flex-row flex items-center justify-center'>

        <div className='flex items-center font-medium text-sm'>
          <Link translate='no' href='#' className='flex items-center'>
            <Image
              src='/logo-app.png'
              alt='logo-app'
              width={28}
              height={2}
              priority
            />
            <h3 className='ml-1.5'>ProfiJSON</h3>
          </Link>
          <IconMinusVertical />
          <h4 className='flex items-center'>
            © 2024 <IconMinus /> JessEleven
          </h4>
        </div>

        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <a className='rounded-full p-1 bg-neutral-800' href='https://github.com/JessEleven/profi-json-nextjs' rel='noreferrer' target='_blank'>
            <IconBrandGithub width={18} height={18} className='text-neutral-200' />
          </a>
        </span>
      </div>
    </footer>
  )
}
