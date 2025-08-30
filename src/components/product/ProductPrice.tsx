import React from 'react'
import { Product } from '@/schema/zod'

type ProductPriceProps = {
  product: Product
}

export const ProductPrice = ({ product }: ProductPriceProps) => (
  <div className='flex items-baseline gap-3'>
    <span className='text-3xl font-bold text-gray-900'>
      ${product.price.toFixed(2)}
    </span>
    {product.discountPercentage > 0 && (
      <span className='text-lg text-red-600 relative -top-0.5'>
        -{product.discountPercentage}%
      </span>
    )}
  </div>
)