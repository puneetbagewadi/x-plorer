import React from "react"
import Navbar from "@/components/shared/navbar/Navbar"
import Footer from "@/components/shared/footer"
import { Sidebar } from "@/components/shared/sidebar"

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="text-light950_dark-950 relative flex min-h-screen w-full flex-col bg-neutral-100 pl-[70px]">
        <Navbar />
        <div className="flex ">
          <section className="flex flex-1 flex-col  pb-6 pt-[6rem] max-md:pb-14">
            {children}
          </section>
        </div>
        {/* Toaster */}
        <div className="footer mt-auto">
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default AppLayout
