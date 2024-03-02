
import moment from "moment"
import bookCover from "../../assets/BookCover.png"
import { Book } from "../../types/book"

interface Props {
    book: Book
}

export default function BookDetailsCard({book}: Props) {
    const fullName = book?.author.firstName +' '+ book?.author.lastName
    const publishedAt = moment(book?.publishedAt).format('LL')
  return (
    <div className="flex flex-col items-center md:flex-row py-10 px-0 xl:px-20 gap-5">
        <div className="xl:w-1/3 md:w-1/2 flex justify-center relative items-center">
            <img src={bookCover} alt="" className="w-96 object-contain" />
            <p className="absolute text-4xl md:text-5xl sm:text-6xl lg:text-6xl font-bold">{book?.title}</p>
        </div>
        <div className="xl:w-2/3 md:w-1/2 flex flex-col gap-3 text-center md:text-start">
            <div>
                <p className="text-xl font-medium">Book Name:</p>
                <p className="md:pl-10 text-2xl font-large">{book?.title}</p>
            </div>
            <div >
                <p className="text-xl font-medium">Book Author:</p>
                <p className="md:pl-10 text-2xl font-large">{fullName}</p>
            </div>
            <div>
                <p className="text-xl font-medium">Book Description:</p>
                <p className="md:pl-10 h-72  overflow-y-auto">{book?.description}</p>
            </div>
            <div className="flex justify-between">
                <div>
                <p className="text-xl font-medium">Published At:</p>
                <p className="md:pl-10 text-2xl font-large">{publishedAt}</p>
                </div>
                <div>
                <p className="text-xl font-medium text-right">Genre:</p>
                <p className="md:pr-10 text-2xl font-large">{book?.genre}</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
