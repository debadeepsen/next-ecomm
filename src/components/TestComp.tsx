'use client'

import { addToCart } from '@/store/cartStorage'

export const TestComp = () => {
  return (
    <div className='mt-10'>
      <button
        onClick={() => {
          localStorage.setItem('SS_test', Date())
        }}
      >
        Set localStorage
      </button>
      <button className='ml-4'
        onClick={() => {
          addToCart({ id: 1, title: 'Test Product', price: 10, quantity: 1 })
        }}
      >
        Add to cart
      </button>
    </div>
  )
}
