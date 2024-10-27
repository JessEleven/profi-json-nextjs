import { useSession } from '@clerk/nextjs'
import { IconCircleFilled } from '@tabler/icons-react'

export function getSessionExpiry () {
  const { session } = useSession()

  const sessionExpiry = session?.expireAt
    ? new Date(session.expireAt).toLocaleDateString()
    : 'N/A'

  return (
    <h5 className='text-xs font-medium'>Expires on {sessionExpiry}</h5>
  )
}

export function getSessionStatus () {
  const { session } = useSession()

  return (
    <div className='flex items-center gap-x-0.5 bg-neutral-400 rounded-full py-0.5 px-2'>
      <IconCircleFilled
        className='text-emerald-400'
        width={11}
        height={11}
      />
      <h5 className='uppercase font-status font-medium text-xs'>{session?.status}</h5>
    </div>
  )
}
