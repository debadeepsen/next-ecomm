import { Product } from '@/schema/zod'
import { StarRating } from './utility/StarRating'
import classNames from 'classnames'

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
    <p className='mb-3'>
      <span
        className={classNames({
          'text-sm': true,
          'line-through': product.discountPercentage > 0
        })}
      >
        ${product.price.toFixed(2)}
      </span>
      {product.discountPercentage > 0 && (
        <span className='text-red-500 font-semibold ml-2'>
          ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
        </span>
      )}
    </p>
    <div>
      <StarRating rating={product.rating} />
    </div>
  </div>
)
