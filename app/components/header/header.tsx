import Logo from './rb_1365.png'
import Image from "next/image"
import Link from 'next/link'


export default function header() {
  return (
  <div className='flex justify-between bg-gradient-to-br from-violet-700/90  to-green-600/90  '> 
     <div className='flex items-center  bg-transparent'>
       <Link href='/' ><Image src={Logo} alt="logo" height={60} className='mx-6'/></Link>
       <Link href='/' ><h1 className='font-serif font-bold text-3xl text-stone-900 px-7 '>  Lorem Ipsum</h1></Link>
    </div>
    <div className='inline-block bl bg-transparent '>
      <ul className='flex justify-end items-center  '>
        <li><div className='bg-lime-950 w-1 h-16 '></div></li>
        <li className='px-2 py-1 mx-5 rounded-lg text-stone-800 font-semibold text-lg transition ease-in-out delay-50 hover:scale-110 hover:translate-z-1 hover:text-stone-900 hover:bg-gradient-to-tr from-lime-600 via-lime-700/50 to-lime-600 duration-300'>
          <Link href='/' >Home</Link>
        </li>
        <li  className='px-2 py-1 mx-5 rounded-lg text-stone-800 font-semibold text-lg transition ease-in-out delay-50 hover:scale-110 hover:translate-z-1 hover:text-stone-900 hover:bg-gradient-to-tr from-lime-600 via-lime-700/50 to-lime-600 duration-300' >
          <Link href='/about' >About</Link>
        </li>
        <li  className='px-2 py-1 mx-5 rounded-lg text-stone-800 font-semibold text-lg transition ease-in-out delay-50 hover:scale-110 hover:translate-z-1 hover:text-stone-900 hover:bg-gradient-to-tr from-lime-600 via-lime-700/50 to-lime-600 duration-300'>
          <Link href='/contact' >Contact</Link>
        </li>
        <li  className='px-2 py-1 mx-5 rounded-lg text-stone-800 font-semibold text-lg transition ease-in-out delay-50 hover:scale-110 hover:translate-z-1 hover:text-stone-900 hover:bg-gradient-to-tr from-lime-600 via-lime-700/50 to-lime-600 duration-300'>
          <Link href='/services' >Services</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}
