import { Product } from '@/schema/zod'

export const ProductExtraInfo = ({
  product: { description, warrantyInformation, shippingInformation, returnPolicy }
}: {
  product: Product
}) => (
  <div className='space-y-4 text-sm text-gray-700 leading-relaxed'>
    <p>{description}</p>
    <p>
      <strong>Warranty:</strong> {warrantyInformation}
    </p>
    <p>
      <strong>Shipping:</strong> {shippingInformation}
    </p>
    <p>
      <strong>Return Policy:</strong> {returnPolicy}
    </p>
  </div>
)
