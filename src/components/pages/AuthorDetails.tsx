import AuthorDetailsCard from "../cards/AuthorDetailsCard";
import BooksContainer from "../containers/BooksContainer";
import { useParams } from "react-router-dom";
import { getAuthorById, selectAllBooks, selectAuthorById } from "../../redux/features/Authors";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import Loading from "../partials/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";

export default function AuthorDetails() {
  const dispatch = useAppDispatch()
  const {authorId} = useParams<string>()
  const author = useAppSelector(selectAuthorById)
  const books = useAppSelector(selectAllBooks)
  const {loading} = useAppSelector((state:RootState)=>state.authors)
  
  useEffect(()=>{
    if (authorId) {
      dispatch(getAuthorById(authorId))
    }
  },[authorId])
  return (
    <div className="px-20 py-10 w-full">
      {loading ?
      <Loading />
      :
      <>
        {author ? <AuthorDetailsCard author={author}/> : <p className="text-center">There's nothing to show</p>}
        <h2 className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Written Books</h2>
        {books ? <BooksContainer books={books} /> : <p className="text-center">There's nothing to show</p>}
      </>
    }
    </div>
  )
}
