import AuthorDetailsCard from "../cards/AuthorDetailsCard";
import BooksContainer from "../containers/BooksContainer";

export default function AuthorDetails() {
  return (
    <div className="px-20 py-10 w-full">
      <AuthorDetailsCard />
      <h2 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Written Books</h2>
      <BooksContainer />
    </div>
  )
}
