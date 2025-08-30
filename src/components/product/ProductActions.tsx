'use client'

import { useState } from 'react'
import { Product } from '@/schema/zod'
import { Icon } from '@iconify-icon/react'
import { addToCart } from '@/store/cartStorage'

interface ProductActionsProps {
  product: Product
}

export const ProductActions = ({ product }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1)

  const onAddToCart = () => {
    const item = {
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
        quantity
      }

      addToCart(item)
      localStorage.setItem('SS_lastAdded', JSON.stringify(item))
  }

  return (
    <div className='flex gap-4'>
      <input
        type='number'
        min={1}
        max={product.stock}
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        className='w-16 border border-neutral-300 rounded px-3 py-2 text-center'
      />
      <button
        className='flex min-w-[160px] bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition justify-center items-center'
        disabled={product.stock === 0}
        onClick={onAddToCart}
      >
        <Icon icon='mdi:cart-plus' size={36} className='text-2xl mr-2' />
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
}
