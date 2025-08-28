import React from 'react'

type ProductImageProps = {
  thumbnail: string
  title: string
  images: string[]
}

export const ProductImage = ({ thumbnail, title, images }: ProductImageProps) => (
  <div>
    <div className='relative w-full h-96 rounded-2xl overflow-hidden bg-gray-100'>
      <img
        src={thumbnail}
        alt={title}
        className='object-contain w-full h-full'
      />
    </div>
    <div className='grid grid-cols-4 gap-3 mt-4'>
      {images.slice(0, 4).map((img, idx) => (
        <div
          key={idx}
          className='relative w-full h-24 rounded-xl overflow-hidden bg-gray-50'
        >
          <img
            src={img}
            alt={`${title}-${idx}`}
            className='object-contain w-full h-full'
          />
        </div>
      ))}
    </div>
  </div>
)
