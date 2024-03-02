import { useEffect } from "react";
import BookDetailsCard from "../cards/BookDetailsCard";
import ReviewsContainer from "../containers/ReviewsContainer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getBookById, selectAllReviews, selectBookById } from "../../redux/features/Books";
import { RootState } from "../../redux/store/store";
import Loading from "../partials/Loading";

export default function BookDetails() {
  
  const dispatch = useDispatch()
  const {bookId} = useParams()
  const book = useSelector(selectBookById)
  const reviews = useSelector(selectAllReviews)
  const {loading} = useSelector((state:RootState)=>state.books)
  
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
          <BookDetailsCard book={book} />
          <h2 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Reviews</h2>
          <ReviewsContainer reviews={reviews} />
      </>
    }
    </div>
  )
}
