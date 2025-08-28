import React from 'react'
import { notFound } from 'next/navigation'
import { getProductDetails } from '@/services/productService'
import { Product } from '@/schema/zod'
import { StarRating } from '../../../../components/utility/StarRating'

interface ProductPageProps {
  params: { id: string }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const product: Product = await getProductDetails(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='space-y-4'>
          <div className='relative w-full h-96 rounded-2xl overflow-hidden bg-gray-100'>
            <img
              src={product.thumbnail}
              alt={product.title}
              className='object-contain'
            />
          </div>
          <div className='grid grid-cols-4 gap-3'>
            {product.images.slice(0, 4).map((img, idx) => (
              <div
                key={idx}
                className='relative w-full h-24 rounded-xl overflow-hidden bg-gray-50'
              >
                <img
                  src={img}
                  alt={`${product.title}-${idx}`}
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div className='flex flex-col space-y-6'>
          <div>
            <h1 className='text-3xl font-semibold text-gray-900'>
              {product.title}
            </h1>
            <p className='text-gray-500 mt-2'>{product.brand}</p>
          </div>

          {/* Rating */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center text-yellow-500'>
              <StarRating size={20} rating={product.rating} />
            </div>
            <span className='text-sm text-gray-600'>
              ({product.reviews.length} reviews)
            </span>
          </div>

          {/* Price */}
          <div className='flex items-baseline gap-3'>
            <span className='text-3xl font-bold text-gray-900'>
              ${product.price.toFixed(2)}
            </span>
            {product.discountPercentage > 0 && (
              <span className='text-lg text-red-600'>
                -{product.discountPercentage}%
              </span>
            )}
          </div>

          {/* Stock + SKU */}
          <div className='text-sm text-gray-600'>
            <p>SKU: {product.sku}</p>
            <p>
              Status:{' '}
              <span
                className={`${
                  product.stock > 0 ? 'text-green-600' : 'text-red-600'
                } font-medium`}
              >
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
            </p>
          </div>

          {/* Actions */}
          <div className='flex gap-4'>
            <button
              className='flex-1 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition'
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            <button
              className='flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition'
              disabled={product.stock === 0}
            >
              Buy Now
            </button>
          </div>

          {/* Extra info */}
          <div className='space-y-4 text-sm text-gray-700 leading-relaxed'>
            <p>{product.description}</p>
            <p>
              <strong>Warranty:</strong> {product.warrantyInformation}
            </p>
            <p>
              <strong>Shipping:</strong> {product.shippingInformation}
            </p>
            <p>
              <strong>Return Policy:</strong> {product.returnPolicy}
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className='mt-12'>
        <h2 className='text-2xl font-semibold mb-4'>Customer Reviews</h2>
        {product.reviews.length === 0 ? (
          <p className='text-gray-500'>No reviews yet.</p>
        ) : (
          <div className='space-y-6'>
            {product.reviews.map((review, idx) => (
              <div
                key={idx}
                className='border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0'
              >
                <div className='flex justify-between items-center mb-2'>
                  <span className='font-medium text-gray-900'>
                    {review.reviewerName}
                  </span>
                  <span className='text-sm text-gray-500'>
                    {new Date(review.date).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                  </span>
                </div>
                <div className='flex items-center mb-1 text-yellow-500'>
                  <StarRating size={16} rating={review.rating} />
                </div>
                <p className='text-gray-700 text-sm'>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage
