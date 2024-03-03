import { Icon } from "@iconify/react";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/hooks";
import { useState } from "react";
import { searchByTitle } from "../../redux/features/Books";
import { searchByLastName } from "../../redux/features/Authors";

export default function SearchInput() {
  const {pathname} = useLocation()
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const handleSearch = () =>{
    if(pathname === '/books') {
      dispatch(searchByTitle(value))
    }
    if(pathname === '/authors'){
      dispatch(searchByLastName(value))
    }
  }

  return (
    <div className=" w-3/5 md:w-1/2 lg:w-2/5 flex items-center relative">
      <input
        type="text"
        className="py-2 px-5 border-b-2 border-gray-400 outline-none w-full"
        placeholder="Search ..."
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <Icon
        icon="ph:magnifying-glass-bold"
        className="w-8 h-8 text-gray-500 absolute right-2"
        onClick={handleSearch}
      />
    </div>
  );
}
