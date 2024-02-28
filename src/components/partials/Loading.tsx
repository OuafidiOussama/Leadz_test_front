import { Icon } from '@iconify/react'

export default function Loading() {
  return (
    <div className='w-screen h-screen flex flex-col gap-5 justify-center items-center relative'>
        <p className='bg-black opacity-50 w-full h-full absolute'></p>
        <Icon icon="material-symbols:hourglass" className='text-6xl animate-spin ' />
        <h1 className='text-2xl font-bold animate-pulse'>Loading ...</h1>
    </div>
  )
}
