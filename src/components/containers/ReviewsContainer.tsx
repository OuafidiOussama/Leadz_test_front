import { Review } from '../../types/review'
import ReviewCard from '../cards/ReviewCard'

interface Props {
  reviews : Review[]
}

export default function ReviewsContainer({reviews}: Props) {
  return (
    <div className="w-full py-5 flex justify-center flex-wrap gap-5">
        {reviews?.map(review => <ReviewCard review={review} key={review.id} />)}
    </div>
  )
}
