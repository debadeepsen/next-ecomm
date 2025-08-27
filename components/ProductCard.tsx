import { Product } from '@/schema/zod'

export const ProductCard = ({ product }: { product: Product }) => (
  <div className='border border-gray-200 rounded-lg p-4 bg-white'>
    {product.thumbnail && (
      <img
        src={product.thumbnail}
        alt={product.title}
        className='w-full h-36 object-cover rounded'
      />
    )}
    <h3 className='mt-4 mb-2 text-lg font-semibold'>{product.title}</h3>
    <p className='text-sm'>${product.price.toFixed(2)}</p>
  </div>
)
