"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import {  LayoutDashboardIcon } from 'lucide-react'

export const navLinks = [
  {
      href: "/dashboard",
      icon: LayoutDashboardIcon,
      tooltip: "Dashboard",
    },
]



const LeftSidebar = () => {
    const [openModal, setOpenModal] = useState(false)
    const path = usePathname()
    const searchParams = useSearchParams()
    const params = searchParams.get("q")

    const activeRoute = path 

    // console.log("PATH",activeRoute)

  return (
    <aside className="md:w-[12rem] backdrop-blur-sm shadow-sm bg-white relative min-h-screen shadow-3xl md:h-screen max-lg:hidden h-auto w-full flex flex-col md:flex-col gap-10 md:gap-5 px-">
         <div className='mt-3 pt-2 px-6 '>
         <div className=' flex flex-row gap-2 items-center'>
          <div className=' flex items-center justify-center h-[40px] w-[40px] bg-green-600 rounded-full text-white'>
            <span>UG</span>
          </div>
        <div className=' flex flex-col gap- items-start'>
            <h1 className=' text-normal font-bold'>UI GURU</h1>
        </div>
       </div>
         </div>
        <div className=' flex flex-col gap-4 px-6 mt-6'>
            {
                navLinks.map((link,idx) => (
                <div key={idx} className=' flex flex-col gap-6 items-center justify-center'>
                    <Link href={link?.href} className={`${activeRoute === link?.href ? "bg-green-600 rounded-xl hover:transition-all hover:opacity-80 text-white" : " text-[#475569] rounded-xl hover:bg-gray-100 hover:transition-all transition-all"}  flex flex-row gap-2 items-center w-full  px-2 py-2  `}>
                        <link.icon size={20} className={`${activeRoute === link?.href ? "text-white" : "text-green-600"}`} />
                        <span>{link?.tooltip}</span>
                    </Link>
                </div>
                ))
            }
        </div>




    </aside>
  )
}

export default LeftSidebar