import BooksContainer from "../containers/BooksContainer";
import SearchInput from "../partials/SearchInput";


export default function Book() {
  return (
    <div className="flex flex-col gap-5 items-center pt-5 ">
      <SearchInput />
      <div className="w-full px-10">
        <h1 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Books</h1>
        <BooksContainer />
      </div>
    </div>
  )
}
