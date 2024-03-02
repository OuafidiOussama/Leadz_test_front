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
    <div className="border-2 w-80 h-32 rounded-xl overflow-clip flex">
        <div className="w-4/12">
          <Icon icon="mdi:user" className="w-full h-full bg-gray-200 opacity-40" />
        </div>
        <div className="w-8/12 border-l-2 px-1">
            <div className="flex justify-center items-center gap-2">
                <p>{fullName}</p>
                <p className="text-xs" title={email}>{email}</p>
            </div>
            <p className="text-xs w-full h-20">{comment}</p>
            <p className="text-xs text-right">{creationDate}</p>
        </div>
    </div>
  )
}
