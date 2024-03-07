import AuthorsContainer from "../containers/AuthorsContainer";
import SearchInput from "../partials/SearchInput";
import { getAuthors, selectAllAuthors } from "../../redux/features/Authors";
import { RootState } from "../../redux/store/store";
import { useEffect } from "react";
import Loading from "../partials/Loading";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";


export default function Author() {
  const dispatch = useAppDispatch()
  const authors = useAppSelector(selectAllAuthors)  
  const {loading} = useAppSelector((state:RootState)=>state.authors) 
  useEffect(()=>{
    dispatch(getAuthors())
  },[])
  return (
    <div className="flex flex-col gap-5 items-center pt-5 ">
      <SearchInput />
      <div className="w-full px-10">
        <h1 data-cy="heading" className="text-4xl font-bold border-b-2 border-gray-200 text-center py-2">Authors</h1>
        {loading ?
        <Loading />
        :
        <AuthorsContainer authors={authors} />
        }
      </div>
    </div>
  )
}
