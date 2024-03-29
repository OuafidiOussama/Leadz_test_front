import {Icon} from '@iconify/react'
import { Author } from '../../types/author'
import { useNavigate } from 'react-router-dom'

interface Props {
  author: Author
}


export default function AuthorCard({author}: Props) {
  const navigate = useNavigate()
  const {id, firstName, lastName} = author
  const fullName = firstName + " " + lastName

  const handleClick = () =>{
    navigate(`/authors/${id}`)
  }
  return (
    <div className="w-80 h-36 relative group overflow-clip cursor-pointer" data-cy="container" onClick={handleClick}>
        <div data-cy="image-container" className="w-20 h-20 rounded-full absolute top-0 left-1/2 -translate-x-10 z-20 overflow-clip -translate-y-20 group-hover:translate-y-0 transition-all duration-300">
          <Icon icon="mdi:user" className="p-2 w-full h-full bg-gray-500 opacity-70" data-cy="image" />
        </div>
        <div data-cy="bessal" className="bg-white w-[90px] h-[90px] rounded-full absolute left-1/2 -translate-x-[45px] -top-[5px] z-10 -translate-y-20 group-hover:translate-y-0 transition-all duration-300"></div>
        <div data-cy="text-container" className="h-20 w-full relative top-1/2 -translate-y-4 bg-gray-500 rounded-md flex justify-center items-center">
          <p data-cy="full-name" className='text-white font-bold text-2xl relative group-hover:translate-y-2 duration-300 transition-all'>{fullName}</p>
        </div>
    </div>
  )
}
