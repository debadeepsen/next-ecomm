import React, { useEffect, useState } from 'react'
import { cartSignal } from '@/store/cartStorage'

interface CartDropdownProps {
  open: boolean
  onClose?: () => void
}

export const CartDropdown = ({ open, onClose }: CartDropdownProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`absolute right-0 top-8 min-w-[220px] bg-white border border-gray-200 rounded shadow-lg transition-all duration-200 ${
        open
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className='p-4'>
        <button
          type='button'
          className='absolute top-2 right-2 w-4 h-4 flex justify-center items-center bg-transparent cursor-pointer text-gray-400 hover:text-gray-700 text-lg'
          onClick={onClose}
          aria-label='Close'
        >
          &times;
        </button>
        <h4 className='font-semibold mb-2 text-sm text-gray-900'>Cart Items</h4>
        {cartSignal.value.length === 0 ? (
          <div className='text-gray-500 text-xs'>Your cart is empty.</div>
        ) : (
          <ul className='divide-y divide-gray-100'>
            {cartSignal.value.map(item => (
              <li key={item.id} className='py-2 flex items-center gap-2'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='w-8 h-8 object-cover rounded'
                />
                <div className='flex-1'>
                  <div className='text-xs text-gray-800 font-medium'>
                    {item.title}
                  </div>
                  <div className='text-xs text-gray-500'>
                    Qty: {item.quantity} &middot; ${item.price}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
