import { useDispatch, useSelector } from "react-redux";
import AuthorDetailsCard from "../cards/AuthorDetailsCard";
import BooksContainer from "../containers/BooksContainer";
import { useParams } from "react-router-dom";
import { getAuthorById, selectAllBooks, selectAuthorById } from "../../redux/features/Authors";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import Loading from "../partials/Loading";

export default function AuthorDetails() {
  const dispatch = useDispatch()
  const {authorId} = useParams()
  const author = useSelector(selectAuthorById)
  const books = useSelector(selectAllBooks)
  const {loading} = useSelector((state:RootState)=>state.authors)
  
  useEffect(()=>{
    dispatch(getAuthorById(authorId))
  },[])
  return (
    <div className="px-20 py-10 w-full">
      {loading ?
      <Loading />
      :
      <>
        <AuthorDetailsCard author={author}/>
        <h2 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Written Books</h2>
        <BooksContainer books={books} />
      </>
    }
    </div>
  )
}
