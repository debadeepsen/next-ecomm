import ProductList from '@/components/ProductList'
import { getProducts, searchProducts } from '@/services/productService'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Product List'
}

type ProductPageProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const data = await (searchParams?.search
    ? searchProducts(searchParams.search as string)
    : getProducts())

  return (
    <div>
      <h2 className='text-4xl my-4'>Products</h2>
      <ProductList products={data.products} />
    </div>
  )
}

export default ProductPage
