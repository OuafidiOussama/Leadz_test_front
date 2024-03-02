import { useEffect } from "react";
import BooksContainer from "../containers/BooksContainer";
import SearchInput from "../partials/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getBooks, selectAllBooks } from "../../redux/features/Books";
import Loading from "../partials/Loading";



export default function Book() {
  const dispatch = useDispatch()
  const books = useSelector(selectAllBooks)
  const {loading} = useSelector((state:RootState)=>state.books) 
  useEffect(()=>{
    dispatch(getBooks())
  },[])
  
  return (
    <div className="flex flex-col gap-5 items-center pt-5 ">
      <SearchInput />
      <div className="w-full px-10">
        <h1 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Books</h1>
        {loading ?
        <Loading />
        :
        <BooksContainer books={books} />
        }
      </div>
    </div>
  )
}
