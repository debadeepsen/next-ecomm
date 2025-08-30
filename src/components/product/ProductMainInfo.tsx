import React from 'react'
import { StarRating } from '../utility/StarRating'
import { Product } from '@/schema/zod'

type ProductMainInfoProps = {
  product: Product
}

export const ProductMainInfo = ({ product }: ProductMainInfoProps) => (
  <>
    <div>
      <h1 className='text-3xl font-semibold text-gray-900'>
        {product.title}
      </h1>
      <p className='text-gray-500 mt-2'>{product.brand}</p>
    </div>
    <div className='flex items-center gap-2'>
      <div className='flex items-center text-yellow-500'>
        <StarRating size={20} rating={product.rating} />
      </div>
      <span className='text-sm text-gray-600'>
        ({product.reviews.length} reviews)
      </span>
    </div>
  </>
)