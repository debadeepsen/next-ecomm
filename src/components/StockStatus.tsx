interface StockStatusProps {
  sku: string
  stock: number
}

export const StockStatus = ({ sku, stock }: StockStatusProps) => (
  <div className='text-sm text-gray-600'>
    <p>
      <span className='font-semibold'>SKU:</span> {sku}
    </p>
    <p>
      <span className='font-semibold'>Status:</span>{' '}
      <span
        className={`${
          stock > 0 ? 'text-green-600' : 'text-red-600'
        } font-medium`}
      >
        {stock > 0 ? 'In Stock' : 'Out of Stock'}
      </span>
    </p>
  </div>
)
