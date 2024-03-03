
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
    <div className="flex flex-col items-center md:flex-row py-10 px-0 xl:px-20 gap-5">
        <div className="xl:w-1/3 md:w-1/2 flex justify-center relative items-center">
            <img src={bookCover} alt="" className="w-96 object-contain" />
            <p className="absolute text-4xl md:text-5xl sm:text-6xl lg:text-6xl font-bold">{title}</p>
        </div>
        <div className="xl:w-2/3 md:w-1/2 flex flex-col gap-3 text-center md:text-start bg-gray-100 p-5 rounded-xl">
            <div>
                <p className="text-xl font-medium">Book Name:</p>
                <p className="md:pl-10 text-2xl font-large">{title}</p>
            </div>
            <div >
                <p className="text-xl font-medium">Book Author:</p>
                <p className="md:pl-10 text-2xl font-large">{fullName}</p>
            </div>
            <div>
                <p className="text-xl font-medium">Book Description:</p>
                <p className="md:pl-10 h-72  overflow-y-auto">{description}</p>
            </div>
            <div className="flex justify-between">
                <div>
                <p className="text-xl font-medium">Published At:</p>
                <p className="md:pl-10 text-2xl font-large">{publishedAt}</p>
                </div>
                <div>
                <p className="text-xl font-medium text-right">Genre:</p>
                <p className="md:pr-10 text-2xl font-large">{genre}</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
