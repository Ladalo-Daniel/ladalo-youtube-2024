"use client"

import React, { useEffect, useState } from 'react'
import { MessageCircleQuestion } from 'lucide-react'
import Link from 'next/link'

import { usePathname, useSearchParams } from 'next/navigation'
import Image from 'next/image'



const TopNavbar = () => {

  const params = useSearchParams()
  const path = usePathname()
  const q = params.get("q")

  const pathName = path
  // console.log(pathName)

 

  return (
    <nav className="md:h-[70px] h-[60px] bg-white backdrop-blur-sm  shadow-sm max-lg:py-1 py-5 max-lg:px-4 px-9 sticky max-md:fixed top-0 w-full flex flex-row items-center justify-between z-30">
         
              <>
              <div className='mt- pt-2 px-2 lg:hidden '>
              <div className=' flex flex-row gap-2 items-center'>
              <div className=' flex items-center justify-center h-[25px] w-[25px] bg-green-600 rounded-full text-white'>
                <span>UG</span>
              </div>
              <div className=' flex flex-col gap- items-start'>
                  <h1 className=' text-normal font-bold'>UG</h1>
              </div>
            </div>
              </div>
                <div className=' flex flex-row gap-2 items-center justify-center'>
                  <div className=" p- h-8 w-8 lg:h-10 lg:w-10 flex items-center text-lg justify-center rounded-full bg-green-600 font-bold text-white">
                    <span>L</span>
                  </div>
                </div>
                </>
        

           <div className={`${pathName === "/admi" ? "max-lg:hidden" : ""} max-lg:hidden flex flex-row  lg:hidden gap-2 items-center justify-center`}>
              <div className=" p- h-8 w-8 lg:h-10 lg:w-10 flex items-center text-lg justify-center rounded-full bg-green-600 font-bold text-white">
                <span>L</span>
              </div>
            </div>

         <div className='  max-lg:hidden flex flex-row gap-2 items-center justify-center'>
            <div className='  max-lg:hidden flex flex-row gap-2 items-center justify-center'>
                <MessageCircleQuestion size={24} className=' text-green-700 font-thin' />
                <span className=' text-gray-700'>Let go...</span>
            </div>
           
        </div>


      
    </nav>
  )
}

export default TopNavbar