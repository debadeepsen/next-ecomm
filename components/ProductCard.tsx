import { Product } from '@/schema/zod'

export const ProductCard = ({ product }: { product: Product }) => (
  <div className='rounded-lg p-4 bg-white h-full shadow-sm border border-white hover:border-neutral-100 hover:shadow-md transition-all'>
    {product.thumbnail && (
      <img
        src={product.thumbnail}
        alt={product.title}
        className='w-full h-36 object-cover rounded'
      />
    )}
    <h3 className='mt-4 mb-1 text-lg font-semibold'>{product.title}</h3>
    <p className='text-sm uppercase text-zinc-400 mb-1'>{product.brand}</p>
    <p className='text-sm'>${product.price.toFixed(2)}</p>
  </div>
)
