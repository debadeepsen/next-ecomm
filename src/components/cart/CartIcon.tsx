'use client'

import { cartSignal } from '@/store/cartStorage'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { useSignals } from '@preact/signals-react/runtime'
import { useEffect, useState } from 'react'
import { CartDropdown } from './CartDropdown'

export const CartIcon = () => {
  useSignals()
  const products = cartSignal.value.length
  const items = cartSignal.value.map(p => p.quantity).reduce((a, c) => a + c, 0)
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <button
        className='relative flex items-center cursor-pointer bg-transparent border-0 p-0'
        onClick={() => setOpen(true)}
        title={
          mounted ? `${products} products, ${items} items in cart` : 'Cart'
        }
      >
        <Icon icon={'mdi:cart'} className='text-2xl' size={36} />
        {mounted && !!items && (
          <span className='relative -top-2 right-2 bg-red-500 text-white rounded-full w-4 h-4 flex justify-center items-center text-[10px]'>
            {items}
          </span>
        )}
      </button>
      <CartDropdown open={open} onClose={() => setOpen(false)} />
    </>
  )
}
