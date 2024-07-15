"use client"
import BottomNavbar from '@/components/navigations/BottomNavbar';
import LeftSidebar from '@/components/navigations/LeftSidebar';
import TopNavbar from '@/components/navigations/TopNavbar';
import { useRouter } from 'next/navigation'

const DashboardLayout = ({children}) => {

  
  const router = useRouter();


 

  return (
    <main className='flex flex-col md:flex-row min-h-screen overflow-hidden max-w-7xl mx-auto'>
    <LeftSidebar />
    <div className="relative h-screen flex flex-col flex-1 w-full custom-scrollbar overflow-y-auto bg-[#F1F1F1] " >
      <TopNavbar  />
        <>
          {children}
        </>
      <BottomNavbar />
    </div>
  </main>
  )
}

export default DashboardLayout