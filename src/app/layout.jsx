import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '@/resources/css/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ProfiJSON',
  icons: [{ rel: 'icon', url: '/profijson.ico' }],
  description: 'Using Next.js and Clerk authentication'
}

export default function RootLayout ({ children }) {
  const appearance = {
    UserButton: {

      variables: {
        colorText: 'white',
        colorBackground: '#363636'
      }
    },
    SingIn: {

    }

  }

  return (
    <ClerkProvider appearance={appearance}>
      <html lang='en'>
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
