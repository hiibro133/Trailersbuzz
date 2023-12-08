import Image from 'next/image'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="w-full h-[40px] fixed top-0 shadow-lg  bg-[#03001417] backdrop-blur-md z-50 px-10">{/*{`${isScrolled && 'bg-[#141414]'}`}*/}
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src="/netflix_logo2.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="netflix logo"
        />

        <ul className="hidden space-x-4 md:flex">
          {/*<li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li> */}
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        {/* <MagnifyingGlassIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" /> */}
        {/* <Link href="/account"> */}
        {/*  <Image
          src="/avatar"
          width={100}
          height={100}
          alt=""
          className="cursor-pointer rounded"
        /> */}
        {/* </Link> */}
      </div>
    </header>
  )
}

export default Header
