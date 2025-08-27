import { Product } from '@/schema/zod'
import { ProductCard } from './ProductCard'

type ProductListProps = {
  products: Product[]
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map(product => (
        <a href='#' key={product.id}>
          <ProductCard product={product} />
        </a>
      ))}
    </div>
  )
}

export default ProductList
