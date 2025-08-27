import { getProducts } from '@/services/productService'
import ProductList from '../../components/ProductList'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Product List'
}

const ProductPage = async () => {
  const data = await getProducts()
  return (
    <div>
      <h2 className='text-4xl my-4'>Products</h2>
      <ProductList products={data.products} />
    </div>
  )
}

export default ProductPage