'use client'

import { cartSignal } from '@/store/cartStorage'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { useSignals } from '@preact/signals-react/runtime'
import { useEffect, useState } from 'react'

export const CartIcon = () => {
  useSignals()
  const items = cartSignal.value
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className='flex'>
      <Icon icon={'mdi:cart'} className='text-2xl' size={36} />
      {mounted && !!items.length && (
        <span className='relative -top-2 right-2 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs'>
          {items.length}
        </span>
      )}
    </div>
  )
}