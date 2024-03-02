import bookCover from "../../assets/BookCover.png"

export default function BookCard() {
  return (
    <div className="h-80 w-64 border-2 overflow-clip rounded-xl">
      <div className="relative flex justify-center items-center h-1/2 overflow-clip hover:h-full transition-all duration-300 ">
        <img src={bookCover} alt="" className="bg-green-500 h-80 w-full object-fit" />
        <p className="absolute text-white text-3xl">Book Title</p>
      </div>
      <div className="flex h-1/2 flex-col justify-center items-center gap-3 border-2">
        <p>Author</p>
        <p>PublishedAt</p>
        <p>Genre</p>
      </div>
    </div>
  )
}
