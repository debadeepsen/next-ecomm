'use client'
import { Product } from '@/schema/zod'
import { ProductCard } from './ProductCard'
import { useState } from 'react'
import { FilterPanel } from './FilterPanel'
import Link from 'next/link'

type ProductListProps = {
  products: Product[]
}
const ProductList = ({ products }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [minRating, setMinRating] = useState(1)

  const categories = Array.from(new Set(products.map(p => p.category))).filter(
    c => !!c
  )
  const brands = Array.from(new Set(products.map(p => p.brand))).filter(
    c => !!c
  )

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory
      ? product.category === selectedCategory
      : true
    const brandMatch = selectedBrand ? product.brand === selectedBrand : true
    const ratingMatch = product.rating >= minRating
    return categoryMatch && brandMatch && ratingMatch
  })

  const handleResetFilters = () => {
    setSelectedCategory('')
    setSelectedBrand('')
    setMinRating(1)
  }

  return (
    <div className='flex w-full gap-8'>
      <FilterPanel
        categories={categories}
        brands={brands}
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        minRating={minRating}
        onCategoryChange={setSelectedCategory}
        onBrandChange={setSelectedBrand}
        onMinRatingChange={setMinRating}
        onReset={handleResetFilters}
      />
      <div className='product-list flex-1'>
        {filteredProducts.map(product => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductList
