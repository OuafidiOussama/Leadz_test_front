import BookDetailsCard from "../cards/BookDetailsCard";
import ReviewsContainer from "../containers/ReviewsContainer";

export default function BookDetails() {
  return (
    <div className="px-20 py-10 w-full">
      <h1 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Book Details</h1>
      <BookDetailsCard />
      <h2 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Reviews</h2>
      <ReviewsContainer />
    </div>
  )
}
