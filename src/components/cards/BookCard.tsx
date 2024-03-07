import { useNavigate } from "react-router-dom"
import bookCover from "../../assets/BookCover.png"
import { Book } from "../../types/book"
import moment from "moment"

interface Props {
  book: Book
}

export default function BookCard({book}: Props) {
  const navigate = useNavigate()
  
  const {id, title, publishedAt: date, author, genre} = book
  const fullName = author?.firstName +' '+ author?.lastName
  const publishedAt = moment(date).format('LL')

  const handleNavigation=() =>{
    navigate(`/books/${id}`)
  }
  
  
  return (
    <div data-cy="container" className="h-80 w-64 border-2 overflow-clip rounded-xl cursor-pointer" onClick={handleNavigation} >
      <div data-cy="cover-container" className="relative flex justify-center items-center h-1/2 overflow-clip hover:h-full transition-all duration-300 ">
        <img data-cy="cover" src={bookCover} alt="" className="h-80 w-full object-fit" />
        <p data-cy="book-title" className="absolute text-white text-3xl">{title}</p>
      </div>
      <div data-cy="info-container" className="flex h-1/2 flex-col justify-center items-center gap-3 border-2">
        <p data-cy="book-author" className="font-bold text-xl">{author ? fullName: '' }</p>
        <p data-cy="book-publicationDate">{publishedAt}</p>
        <p data-cy="book-genre" >{genre}</p>
      </div>
    </div>
  )
}
