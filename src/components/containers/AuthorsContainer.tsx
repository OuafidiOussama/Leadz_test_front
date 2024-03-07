import { Author } from "../../types/author";
import {Icon} from '@iconify/react'
import AuthorCard from "../cards/AuthorCard";

interface Props {
  authors: Author[]
}

export default function AuthorsContainer({authors}: Props) {
  return (
    <div data-cy="authors-container" className="w-full py-5 flex justify-center flex-wrap gap-5">
      {
        authors.length === 0 ?
        <div className='flex items-center gap-2'>
          <p data-cy="message" className='text-2xl font-bold'>There is No authors in the plateform Yet! Please Come Back Again</p>
          <Icon data-cy="no-authors-icon" icon="mdi:emoticon-cry" className='text-3xl'/>
        </div>
      :
        authors.map(author=><AuthorCard author={author} key={author.id} data-cy="author-card" />)
      }
    </div>
  )
}
