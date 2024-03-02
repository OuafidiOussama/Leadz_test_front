import {Icon} from "@iconify/react"

export default function ReviewCard() {
  return (
    <div className="border-2 w-80 h-32 rounded-xl overflow-clip flex">
        <div className="w-4/12">
          <Icon icon="mdi:user" className="w-full h-full bg-gray-200 opacity-40" />
        </div>
        <div className="w-8/12 border-l-2 px-1">
            <div className="flex justify-center items-center gap-2">
                <p>Full Name</p>
                <p className="text-xs" title="email@gmail.com">email@gmail.com</p>
            </div>
            <p className="text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto tempore non veritatis aut iste ratione optio. Debitis, vero eius dolorem, excepturi neque nobis, reprehenderit sequi illum facilis porro consectetur labore?</p>
        </div>
    </div>
  )
}
