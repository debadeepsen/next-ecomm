import { Product } from '@/schema/zod'
import { StarRating } from './utility/StarRating'

type Review = Product['reviews'][number]

interface ProductReviewsProps {
  reviews: Review[]
}

export const ProductReviews = ({ reviews }: ProductReviewsProps) => (
  <div className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
    {reviews.length === 0 ? (
      <p className="text-gray-500">No reviews yet.</p>
    ) : (
      <div className="space-y-6">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-900">
                {review.reviewerName}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(review.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center mb-1 text-yellow-500">
              <StarRating size={16} rating={review.rating} />
            </div>
            <p className="text-gray-700 text-sm">{review.comment}</p>
          </div>
        ))}
      </div>
    )}
  </div>
)
