import Navbar from '@/components/navbar'

export default function AboutPage () {
  return (
    <main>
      <Navbar />

      <section className='mt-12 flex flex-col justify-center items-center'>
        <h3 className='text-lg font-medium'>Next.JS + Clerk Auth</h3>
      </section>
    </main>
  )
}
