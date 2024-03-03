import { Review } from '../../types/review'
import {Icon} from '@iconify/react'
import ReviewCard from '../cards/ReviewCard'

interface Props {
  reviews : Review[]
}

export default function ReviewsContainer({reviews}: Props) {
  return (
    <div className="w-full py-5 flex justify-center flex-wrap gap-5">
      {
        reviews.length === 0 ?
        <div className='flex items-center gap-2'>
          <p className='text-2xl font-bold'>This Book has no Reviews</p>
          <Icon icon="mdi:emoticon-cry" className='text-3xl'/>
        </div>
        :
        reviews?.map(review => <ReviewCard review={review} key={review.id} />)
      }
    </div>
  )
}
