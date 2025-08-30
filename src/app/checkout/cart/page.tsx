'use client'

import { cartSignal } from '@/store/cartStorage'
import { useSignals } from '@preact/signals-react/runtime'
import Link from 'next/link'

const CartPage = () => {
  useSignals()
  const cartItems = cartSignal.value
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleChange = (id: number, value: number) => {
    cartSignal.value = cartSignal.value
      .map(item => (item.id === id ? { ...item, quantity: value } : item))
      .filter(item => item.quantity > 0)
  }

  return (
    <div className='max-w-3xl mx-auto px-4 py-10'>
      <h1 className='text-2xl font-bold mb-6'>Your Cart</h1>
      {cartItems.length === 0 ? (
        <div className='text-gray-500 mb-8'>Your cart is empty.</div>
      ) : (
        <div className='bg-white rounded shadow p-6'>
          <ul className='divide-y divide-gray-100'>
            {cartItems.map(item => (
              <li key={item.id} className='py-4 flex items-center gap-6'>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className='w-16 h-16 object-cover rounded'
                />
                <div className='flex-1'>
                  <div className='font-medium'>{item.title}</div>
                  <div className='text-sm text-gray-500 flex items-center justify-between gap-2 mt-2'>
                    <div>
                      Qty:
                      <input
                        type='number'
                        className='w-12 text-center border border-gray-300 rounded px-2 py-1 ml-2'
                        value={item.quantity}
                        onInput={e =>
                          handleChange(
                            item.id,
                            Math.max(
                              0,
                              Number((e.target as HTMLInputElement).value)
                            )
                          )
                        }
                      />
                    </div>
                    <div className='font-semibold text-gray-900'>
                      ${item.price * item.quantity}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='flex justify-between items-center mt-6'>
            <span className='font-bold text-lg'>Total:</span>
            <span className='font-bold text-lg'>${total.toFixed(2)}</span>
          </div>
          <Link
            href='/checkout/payment'
            className='mt-8 block w-full text-center rounded-sm bg-gray-800 text-white px-4 py-2 hover:bg-gray-600 cursor-pointer transition'
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  )
}

export default CartPage
