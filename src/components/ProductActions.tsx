import { Icon } from '@iconify-icon/react'

interface ProductActionsProps {
  stock: number
}

export const ProductActions = ({ stock }: ProductActionsProps) => (
  <div className='flex gap-4'>
    <button
      className='flex min-w-[160px] bg-gray-900 text-white py-3 rounded font-medium hover:bg-gray-800 transition justify-center items-center'
      disabled={stock === 0}
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
