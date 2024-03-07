import {Icon} from "@iconify/react"
import { Review } from "../../types/review"
import moment from "moment"

interface Props {
  review: Review
}

export default function ReviewCard({review}: Props) {
  const {fullName, email, comment, creationDate:date} = review
  const creationDate = moment(date).format('LL')
  return (
    <div data-cy="container" className="border-2 w-80 h-32 rounded-xl overflow-clip flex">
        <div data-cy="image-container" className="w-4/12">
          <Icon data-cy="image" icon="mdi:user" className="w-full h-full bg-gray-200 opacity-40" />
        </div>
        <div data-cy="info-container" className="w-8/12 border-l-2 px-1">
            <div data-cy="details" className="flex justify-center items-center gap-2">
                <p data-cy="full-name">{fullName}</p>
                <p data-cy="email" className="text-xs" title={email}>{email}</p>
            </div>
            <p data-cy="comment" className="text-xs w-full h-20">{comment}</p>
            <p data-cy="creationDate" className="text-xs text-right">{creationDate}</p>
        </div>
    </div>
  )
}
