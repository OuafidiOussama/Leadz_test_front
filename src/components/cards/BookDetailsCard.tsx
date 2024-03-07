
import moment from "moment"
import bookCover from "../../assets/BookCover.png"
import { Book } from "../../types/book"

interface Props {
    book: Book
}

export default function BookDetailsCard({book}: Props) {
    const {title, author, description, genre, publishedAt:date} = book
    const fullName = author.firstName +' '+ author.lastName
    const publishedAt = moment(date).format('LL')
  return (
    <div data-cy="container" className="flex flex-col items-center md:flex-row py-10 px-0 xl:px-20 gap-5">
        <div data-cy="cover-container" className="xl:w-1/3 md:w-1/2 flex justify-center relative items-center">
            <img data-cy="cover" src={bookCover} alt="" className="w-96 object-contain" />
            <p data-cy="book-title" className="absolute text-4xl md:text-5xl sm:text-6xl lg:text-6xl font-bold text-white">{title}</p>
        </div>
        <div data-cy="info-container" className="xl:w-2/3 md:w-1/2 flex flex-col gap-3 text-center md:text-start bg-indigo-50 p-5 rounded-xl">
            <div data-cy="title-container">
                <p data-cy="title-label" className="text-xl font-medium">Book Name:</p>
                <p data-cy="title-book" className="md:pl-10 text-2xl font-large">{title}</p>
            </div>
            <div data-cy="author-container" >
                <p data-cy="author-label" className="text-xl font-medium">Book Author:</p>
                <p data-cy="author-book" className="md:pl-10 text-2xl font-large">{fullName}</p>
            </div>
            <div data-cy="description-container">
                <p data-cy="description-label" className="text-xl font-medium">Book Description:</p>
                <p data-cy="description-book" className="md:pl-10 h-72 overflow-y-auto">{description}</p>
            </div>
            <div data-cy="sup-container" className="flex justify-between">
                <div data-cy="publication-container">
                <p data-cy="publication-label" className="text-xl font-medium">Published At:</p>
                <p data-cy="publication-book" className="md:pl-10 text-2xl font-large">{publishedAt}</p>
                </div>
                <div data-cy="genre-container">
                <p data-cy="genre-label" className="text-xl font-medium text-right">Genre:</p>
                <p data-cy="genre-book" className="md:pr-10 text-2xl font-large">{genre}</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
