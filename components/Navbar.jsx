'use client'
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";
export default function Navbar() {

  const sideMenuRef = useRef();
  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }
  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
      <Image src={assets.header_bg_color} alt="" className="w-full"/>
    </div>
    <nav className="flex w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 justify-between items-center z-50">
      <h1 className="text-3xl font-bold" ><a href="#top">Ansh Srivastava</a></h1>
    <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 
    bg-white shadow-lg ">
      <li><a href="/">Home</a></li>
      <li><a href="#about">About me</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#contact">Contact me</a></li>
    </ul>

    <div>
      <a href="#contact" className="hidden lg:flex gap-3 items-center border px-10 py-2.5 rounded-full">Contact 
        <Image src={assets.arrow_icon} alt="nil" className="w-3"/> </a>


    <button className="block md:hidden ml-3" onClick={openSideMenu}>
    <Image src={assets.menu_black} alt="" className="w-6 cursor-pointer"/>
    </button>
    </div>

    {/* Mobile menu */}
    <ul ref={sideMenuRef} className="flex md:hidden  flex-col gap-4 fixed rounded-lg px-10 py-20 w-64  transition duration-500 shadow-lg h-screen z-50 top-0 -right-64 bottom-0 bg-rose-50">
      <div className="absolute top-5 right-5" onClick={closeSideMenu}>
        <Image src={assets.close_black} alt="" className="w-6 cursor-pointer"/>
      </div>
      <li><a href="/" onClick={closeSideMenu}>Home</a></li>
      <li><a href="#about" onClick={closeSideMenu}>About me</a></li>
      <li><a href="#project" onClick={closeSideMenu}>Project</a></li>
      <li><a href="#contact" onClick={closeSideMenu}>Contact me</a></li>
    </ul>
    </nav>
  
    </>
  )
}
