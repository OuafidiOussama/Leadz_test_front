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
    <div className="h-80 w-64 border-2 overflow-clip rounded-xl cursor-pointer" onClick={handleNavigation} >
      <div className="relative flex justify-center items-center h-1/2 overflow-clip hover:h-full transition-all duration-300 ">
        <img src={bookCover} alt="" className="h-80 w-full object-fit" />
        <p className="absolute text-white text-3xl">{title}</p>
      </div>
      <div className="flex h-1/2 flex-col justify-center items-center gap-3 border-2">
        <p className="font-bold text-xl">{author ? fullName: '' }</p>
        <p>{publishedAt}</p>
        <p >{genre}</p>
      </div>
    </div>
  )
}
