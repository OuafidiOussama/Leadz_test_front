import { Book } from '../../types/book'
import BookCard from '../cards/BookCard'

interface Props {
  books: Book[]
}

export default function BooksContainer({books}: Props) {
  
  return (
    <div className="w-full py-5 flex justify-center flex-wrap gap-5">
        {books.map((book)=> <BookCard book={book} key={book.id} />)}
    </div>
  )
}
