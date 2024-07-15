"use client"

import {  LayoutDashboardIcon} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

export const navLinks = [
  {
      href: "/dashboard",
      icon: LayoutDashboardIcon,
      tooltip: "Dashboard",
    },
 
]

const BottomNavbar = () => {


    const path = usePathname()
    const searchParams = useSearchParams()
    const params = searchParams.get("q")

    const activeRoute = path

  return (
    <nav className="h-auto bg-white backdrop-blur-md  shadow-md lg:hidden max-lg:py-1 py-5 max-lg:px-4 px-9 sticky max-md:fixed bottom-0 w-full flex flex-row items-center justify-between z-30">
      {
         navLinks.map((link,idx) => (
            <div key={idx} className=' flex flex-row gap-4'>
                <Link href={link?.href} className={` flex flex-col items-center justify-center`}>
                    <link.icon size={activeRoute === link?.href ? 24 : 24} className={activeRoute === link?.href ? " bg-green-100 p-1 rounded-md text-green-600  hover:transition-all hover:opacity-80" : " text-green-800 text-s hover:p-1 hover:bg-green-50 hover:rounded-md hover:transition-all"} />
                    <span className=' text-sm'>{link?.tooltip}</span>
                </Link>
            </div>
          ))
        }
    </nav>
  )
}

export default BottomNavbar