interface ProductActionsProps {
  stock: number
}

export const ProductActions = ({ stock }: ProductActionsProps) => (
  <div className="flex gap-4">
    <button
      className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition"
      disabled={stock === 0}
    >
      Add to Cart
    </button>
    <button
      className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition"
      disabled={stock === 0}
    >
      Buy Now
    </button>
  </div>
)
