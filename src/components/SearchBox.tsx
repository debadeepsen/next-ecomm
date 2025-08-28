'use client'

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { searchProducts } from '@/services/productService'
import { useDebouncedValue } from '@/utils/hooks'
import { Icon } from '@iconify-icon/react'
import { Product } from '@/schema/zod'
import { redirect } from 'next/navigation'
import { set } from 'zod'

interface SearchBoxProps {
  placeholder?: string
}

const SearchBox = ({ placeholder = 'Search...' }: SearchBoxProps) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{ id: number; title: string }[]>([])
  const [showDropdown, setShowDropdown] = useState(false)
  const debouncedQuery = useDebouncedValue(query, 350)

  useEffect(() => {
    const fetchResults = async () => {
      if (debouncedQuery.trim()) {
        const data = await searchProducts(debouncedQuery.trim())
        const products: Product[] = data.products || []
        setResults(products.map(({ id, title }) => ({ id, title })))
        setShowDropdown(true)
      } else {
        setResults([])
        setShowDropdown(false)
      }
    }
    fetchResults()
  }, [debouncedQuery])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowDropdown(false)
    const trimmedQuery = encodeURIComponent(query.trim())
    setQuery('')
    if (trimmedQuery) redirect(`/?search=${trimmedQuery}`)
  }

  const handleSelect = (id: number) => {
    setQuery('')
    setShowDropdown(false)
    redirect(`/product/${id}`)
  }

  return (
    <div className='relative w-full max-w-md'>
      <form
        onSubmit={handleSubmit}
        className='flex gap-0 border border-gray-300/40 rounded-sm'
      >
        <input
          type='text'
          value={query}
          onChange={handleChange}
          placeholder={placeholder}
          className='flex-1 px-3 py-2 focus:outline-none text-sm'
          autoComplete='off'
          onFocus={() => results.length > 0 && setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
        />
        <button
          type='submit'
          className='px-4 py-2 bg-transparent text-white rounded-s-none rounded-e-sm transition flex items-center justify-center w-4'
        >
          <Icon icon='ic:round-search' />
        </button>
      </form>
      {showDropdown && results.length > 0 && (
        <ul className='absolute top-full left-0 right-0 bg-white border border-gray-200 rounded mt-1 z-10 shadow'>
          {results.map((product, idx) => (
            <li
              key={product.id}
              className='px-3 py-2 cursor-pointer hover:bg-gray-100 border-b border-gray-100 last:border-b-0 text-xs text-gray-700'
              onMouseDown={() => handleSelect(product.id)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBox
