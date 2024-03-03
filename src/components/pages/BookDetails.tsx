import { useEffect } from "react";
import BookDetailsCard from "../cards/BookDetailsCard";
import ReviewsContainer from "../containers/ReviewsContainer";
import { useParams } from "react-router-dom";
import { getBookById, selectAllReviews, selectBookById } from "../../redux/features/Books";
import { RootState } from "../../redux/store/store";
import Loading from "../partials/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";

export default function BookDetails() {
  
  const dispatch = useAppDispatch()
  const {bookId} = useParams()
  const book = useAppSelector(selectBookById)
  const reviews = useAppSelector(selectAllReviews)
  const {loading} = useAppSelector((state:RootState)=>state.books)
  
  useEffect(()=>{
    dispatch(getBookById(bookId))
  },[])

  return (
    <div className="px-20 py-10 w-full">
      {loading ? 
      <Loading />
      :
      <>
          <h1 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Book Details</h1>
          {book && <BookDetailsCard book={book} />}
          <h2 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Reviews</h2>
          {reviews && <ReviewsContainer reviews={reviews} />}
      </>
    }
    </div>
  )
}
