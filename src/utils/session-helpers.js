import { useSession } from '@clerk/nextjs'

export function getSessionExpiry () {
  const { session } = useSession()

  return (
    session?.expireAt
      ? new Date(session.expireAt).toLocaleDateString()
      : 'N/A'
  )
}
