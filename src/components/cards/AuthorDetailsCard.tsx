import {Icon} from '@iconify/react'

export default function AuthorDetailsCard() {
  return (
    <div className='flex flex-col items-center gap-5'>
        <div className="w-36 h-36 rounded-full overflow-clip">
            <Icon icon="mdi:user" className="p-2 w-full h-full bg-gray-500 opacity-70" />
        </div>
        <p className='font-bold text-3xl'>Author Name</p>
        <p className='text-center md:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos optio expedita facilis, quidem tempora blanditiis qui quae ullam nisi soluta dolorum vel magnam reiciendis sit illum natus, similique nam dignissimos.</p>
    </div>
  )
}
