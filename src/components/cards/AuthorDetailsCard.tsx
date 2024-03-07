import {Icon} from '@iconify/react'
import { Author } from '../../types/author'

interface Props {
  author: Author
}

export default function AuthorDetailsCard({author}: Props) {
  const {firstName, lastName, biography} = author
  const fullName = firstName + ' ' + lastName
  return (
    <div data-cy="container" className='flex flex-col items-center gap-5'>
        <div data-cy="image-container" className="w-36 h-36 rounded-full overflow-clip">
            <Icon data-cy="image" icon="mdi:user" className="p-2 w-full h-full bg-gray-500 opacity-70" />
        </div>
        <p data-cy="full-name" className='font-bold text-3xl'>{fullName}</p>
        <div data-cy="biography-container" className='bg-gray-100 w-full flex flex-col items-center rounded-xl h-[400px] overflow-y-auto relative'>
          <p data-cy="biography" className='text-center md:text-start p-5'>{biography}</p>
        </div>
    </div>
  )
}
