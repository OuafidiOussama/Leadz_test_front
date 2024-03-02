import {Icon} from '@iconify/react'

export default function AuthorCard() {
  return (
    <div className="w-80 h-36 relative group overflow-clip">
        <div className="w-20 h-20 rounded-full absolute top-0 left-1/2 -translate-x-10 z-20 overflow-clip -translate-y-20 group-hover:translate-y-0 transition-all duration-300">
          <Icon icon="mdi:user" className="p-2 w-full h-full bg-gray-500 opacity-70" />
        </div>
        <div className="bg-white w-[90px] h-[90px] rounded-full absolute left-1/2 -translate-x-[45px] -top-[5px] z-10 -translate-y-20 group-hover:translate-y-0 transition-all duration-300 "></div>
        <div className="h-20 w-full relative top-1/2 -translate-y-4 bg-gray-500 rounded-md flex justify-center items-center ">
          <p className='text-white font-bold text-2xl relative group-hover:translate-y-2 duration-300 transition-all'>Author Name</p>
        </div>
    </div>
  )
}
