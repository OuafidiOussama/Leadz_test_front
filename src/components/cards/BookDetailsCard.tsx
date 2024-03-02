import bookCover from "../../assets/BookCover.png"


export default function BookDetailsCard() {
  return (
    <div className="flex flex-col items-center md:flex-row py-10 px-0 xl:px-20 gap-5">
        <div className="xl:w-1/3 md:w-1/2 flex justify-center relative items-center">
            <img src={bookCover} alt="" className="w-96 object-contain" />
            <p className="absolute text-4xl md:text-5xl sm:text-6xl lg:text-6xl font-bold">Game Dev</p>
        </div>
        <div className="xl:w-2/3 md:w-1/2 flex flex-col gap-3 text-center md:text-start">
            <div>
                <p className="text-xl font-medium">Book Name:</p>
                <p className="md:pl-10 text-2xl font-large">Game Dev</p>
            </div>
            <div >
                <p className="text-xl font-medium">Book Author:</p>
                <p className="md:pl-10 text-2xl font-large">Ouafidi Oussama</p>
            </div>
            <div>
                <p className="text-xl font-medium">Book Description:</p>
                <p className="md:pl-10 h-72  overflow-y-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates doloribus commodi ea accusantium velit! Hic fuga suscipit, vel architecto labore iusto quod nesciunt eum repudiandae natus accusamus, assumenda perspiciatis harum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio sit quis, ratione cupiditate culpa optio libero ullam distinctio ipsa sint adipisci! Vitae necessitatibus quas tempore. Quam ipsam non tenetur itaque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur explicabo consectetur ex? Sed perferendis nemo sint architecto quaerat rerum animi quia id voluptatibus dignissimos? Debitis nulla eaque tenetur dolore voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquid, iure accusamus aperiam consequuntur voluptatibus praesentium repellat, debitis quisquam sequi nisi facilis, fugiat quibusdam corporis. Deserunt voluptas aperiam iusto esse! Book Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati libero omnis odio, repudiandae atque iste. Maxime expedita blanditiis voluptate ipsa dolorum cumque animi voluptas ab. Cupiditate veniam placeat fuga perferendis.</p>
            </div>
            <div className="flex justify-between">
                <div>
                <p className="text-xl font-medium">Published At:</p>
                <p className="md:pl-10 text-2xl font-large">January 2028</p>
                </div>
                <div>
                <p className="text-xl font-medium text-right">Genra:</p>
                <p className="md:pr-10 text-2xl font-large">Dev</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
