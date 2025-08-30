import { notFound } from 'next/navigation'
import { getProductDetails } from '@/services/productService'
import { Product } from '@/schema/zod'
import { ProductImage } from '@/components/ProductImage'
import { ProductMainInfo } from '@/components/ProductMainInfo'
import { ProductPrice } from '@/components/ProductPrice'
import { ProductActions } from '@/components/ProductActions'
import { ProductExtraInfo } from '@/components/ProductExtraInfo'
import { StockStatus } from '@/components/StockStatus'
import { ProductReviews } from '@/components/ProductReviews'

interface ProductPageProps {
  params: { id: string }
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const awaitedParams = await params
  const product: Product = await getProductDetails(awaitedParams.id)

  if (!product) {
    notFound()
  }

  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Left: Images */}
        <ProductImage
          thumbnail={product.thumbnail}
          title={product.title}
          images={product.images}
        />

        {/* Right: Info */}
        <div className='flex flex-col space-y-6'>
          <ProductMainInfo product={product} />
          <ProductPrice product={product} />
          <StockStatus sku={product.sku} stock={product.stock} />
          <ProductActions product={product} />
          <ProductExtraInfo product={product} />
        </div>
      </div>

      <ProductReviews reviews={product.reviews} />
    </div>
  )
}

export default ProductPage
