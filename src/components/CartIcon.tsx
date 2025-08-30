'use client'

import { cartSignal, initializeCart } from '@/store/cartStorage'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { useSignalEffect, useSignals } from '@preact/signals-react/runtime'
import { useEffect } from 'react'

export const CartIcon = () => {
  useSignals()
  const items = cartSignal.value

  useEffect(() => {
    initializeCart()
  }, [])

  useSignalEffect(() => {
    console.log('CartIcon: Signal changed at ' + Date())
    console.log('CartIcon: items=', items)
  })

  return (
    <div className='flex'>
      <Icon icon={'mdi:cart'} className='text-2xl' size={36} />
      {!!items.length && (
        <span className='relative -top-2 right-2 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-xs'>
          {items.length}
        </span>
      )}
    </div>
  )
}
