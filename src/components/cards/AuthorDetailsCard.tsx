import {Icon} from '@iconify/react'
import { Author } from '../../types/author'

interface Props {
  author: Author
}

export default function AuthorDetailsCard({author}: Props) {

  const fullName = author?.firstName + ' ' + author?.lastName
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="w-36 h-36 rounded-full overflow-clip">
            <Icon icon="mdi:user" className="p-2 w-full h-full bg-gray-500 opacity-70" />
        </div>
        <p className='font-bold text-3xl'>{fullName}</p>
        <p className='text-center md:text-start'>{author?.biography}</p>
    </div>
  )
}
