import React from 'react'

type FilterPanelProps = {
  categories: string[]
  brands: string[]
  selectedCategory: string
  selectedBrand: string
  minRating: number
  onCategoryChange: (category: string) => void
  onBrandChange: (brand: string) => void
  onMinRatingChange: (rating: number) => void
  onReset: () => void
}

export const FilterPanel = ({
  categories,
  brands,
  selectedCategory,
  selectedBrand,
  minRating,
  onCategoryChange,
  onBrandChange,
  onMinRatingChange,
  onReset
}: FilterPanelProps) => (
  <aside className='w-full sm:w-64 bg-white border border-neutral-100 rounded-lg p-4 mb-6 sm:mb-0 flex flex-col gap-4'>
    <div>
      <label className='block font-semibold mb-2'>Category</label>
      <select
        value={selectedCategory}
        onChange={e => onCategoryChange(e.target.value)}
      >
        <option value=''>All</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label className='block font-semibold mb-2'>Brand</label>
      <select
        value={selectedBrand}
        onChange={e => onBrandChange(e.target.value)}
      >
        <option value=''>All</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label className='block font-semibold mb-2'>Minimum Star Rating</label>
      <input
        type='range'
        min={1}
        max={5}
        step={1}
        value={minRating}
        onChange={e => onMinRatingChange(Number(e.target.value))}
        className='w-full'
      />
      <div className='text-sm mt-1'>★ {minRating} & up</div>
    </div>
    <button
      onClick={onReset}
      type='button'
      className='mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded border'
    >
      Reset Filters
    </button>
  </aside>
)
