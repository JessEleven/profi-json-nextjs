import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Loading ({ onFinish }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      onFinish()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <>
      {loading &&
        (
          <div className='flex items-center justify-center h-screen splashScreen'>
            <Image
              className='animate-pulse'
              src='/logo-app.png'
              alt='Logo App'
              width={75}
              height={75}
              priority
            />
          </div>
        )}
    </>
  )
}
