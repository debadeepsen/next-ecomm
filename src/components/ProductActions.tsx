'use client'

import { Icon } from '@iconify-icon/react'

interface ProductActionsProps {
  stock: number
  onAddToCart?: (quantity: number) => void
}

export const ProductActions = ({ stock, onAddToCart }: ProductActionsProps) => (
  <div className='flex gap-4'>
    <input
      type='number'
      min={1}
      max={stock}
      defaultValue={1}
      className='w-16 border border-neutral-300 rounded px-3 py-2 text-center'
    />
    <button
      className='flex min-w-[160px] bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition justify-center items-center'
      disabled={stock === 0}
      onClick={() => onAddToCart?.(1)}
    >
      <Icon icon='mdi:cart-plus' size={36} className='mr-2' />
      Add to Cart
    </button>
    {/* <button
      className="flex-1 bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600 transition"
      disabled={stock === 0}
    >
      Buy Now
    </button> */}
  </div>
)
