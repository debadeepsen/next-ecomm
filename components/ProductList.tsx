'use client'
import { Product } from '@/schema/zod'
import { ProductCard } from './ProductCard'
import { useState } from 'react'
import { FilterPanel } from './FilterPanel'

type ProductListProps = {
  products: Product[]
}
const ProductList = ({ products }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')

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
    return categoryMatch && brandMatch
  })

  const handleResetFilters = () => {
    setSelectedCategory('')
    setSelectedBrand('')
  }

  return (
    <div className='flex w-full gap-8'>
      <FilterPanel
        categories={categories}
        brands={brands}
        selectedCategory={selectedCategory}
        selectedBrand={selectedBrand}
        onCategoryChange={setSelectedCategory}
        onBrandChange={setSelectedBrand}
        onReset={handleResetFilters}
      />
      <div className='product-list flex-1'>
        {filteredProducts.map(product => (
          <a href='#' key={product.id}>
            <ProductCard product={product} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default ProductList
