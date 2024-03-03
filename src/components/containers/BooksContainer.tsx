import { Book } from '../../types/book'
import BookCard from '../cards/BookCard'
import {Icon} from '@iconify/react'

interface Props {
  books: Book[]
}

export default function BooksContainer({books}: Props) {
  return (
    <div className="w-full py-5 flex justify-center flex-wrap gap-5">
      {
        books.length === 0 ?
        <div className='flex items-center gap-2'>
          <p className='text-2xl font-bold'>There's no Books Yet!</p>
          <Icon icon="mdi:emoticon-cry" className='text-3xl'/>
        </div>
      : 
        books?.map((book)=> <BookCard book={book} key={book.id} />)
      }
    </div>
  )
}
