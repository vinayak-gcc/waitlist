"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, ArrowUp } from "lucide-react"
import RevealEffect from "./RevealEffect"

const Navbar = () => {
  const [MenuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef(null)
  const [NavOpen, setNavOpen] = useState(false)
  const NavRef = useRef(null)
  const buttonRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen)
  }

  const openMenu = () => {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleNav = () => {
    setNavOpen(!MenuOpen)
  }

  const openNav = () => {
    setNavOpen(true)
  }

  const closeNav = () => {
    setNavOpen(false)
  }

  // Detect scroll position and auto-close menu when not scrolled
  useEffect(() => {
    const handleScroll = () => {
      const newIsScrolled = window.scrollY > 100
      setIsScrolled(newIsScrolled)
      
      // Auto-close menu when returning to top (not scrolled)
      if (!newIsScrolled) {
        setMenuOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          NavRef.current && !NavRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      {/* Main Navbar Container */}
      <div className="container scale-95 relative flex items-center justify-center mx-auto px-0 z-50">
        {/* Desktop Navbar shown when not scrolled */}
        {!isScrolled && (
          <div className="relative mx-2 mt-4 hidden md:block"> 
            {/* Glassmorphism effect */}
            <div
              className="md:backdrop-blur-md bg-black/60 border border-white/20 rounded-[22px] shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2),0px_10px_20px_rgba(0,0,0,0.4)]
             w-[630px] h-[48px] mt-3 absolute left-1/2 top-0 -translate-x-1/2 box-border pointer-events-none"
            ></div>
            
            {/* Navbar Content */}
            <div className="relative z-10 flex items-center space-x-6 px-6 py-4 rounded-full text-white overflow-hidden">
              <span className="text-xl -ml-6 mr-1 font-bold border border-white/20 py-1.5 px-2.5 rounded-[19px] bg-white/5">
                <a href="#/">W</a>
              </span>
              <div className="flex items-center text-white text-xs font-extrabold space-x-5">
                <a
                  href="#Hero"
                  className="font-md  border text-[0.9rem] border-white/30 py-2.5 px-3 rounded-2xl bg-white/5 -ml-5 flex items-center space-x-1 relative"
                >
                  Hero v01
                  <ChevronDown size={18} className="text-white ml-1" />
                </a>
                <a href="#Partner" className="font-bold">
                <RevealEffect text="Partners" />
                </a>
                <a href="#Features" className="font-bold">
                <RevealEffect text="Features" />
                </a>
                <a href="#Testimonials" className="font-bold">
                <RevealEffect text="Testimonials" />
                </a>
                <a href="#Faq" className="font-bold">
                <RevealEffect text="FAQ" />
                </a>
                <a href="#" className="font-normal -ml-4 text-lg">
                  |
                </a>
                <a href="404" className="font-bold">
                <RevealEffect text="404" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navbar  shown when not scrolled  */}
        {!isScrolled && (
          <div className="w-full md:hidden">
            <div className="flex justify-between items-center px-4 py-2 mt-4 mb-4 bg-black/50 border border-white/20 rounded-full border border-white/20 shadow-[inset_0px_0px_30px_rgba(255,255,255,0.2),0px_10px_20px_rgba(0,0,0,0.4)]">
              <span className="text-xl font-bold border border-white/10 py-1.5 px-2.5 rounded-[16px] bg-white/5">
                <a href="#/">W</a>
              </span>
              <div className="flex items-center">
                <a
                  href="#Hero"
                  className="text-white flex items-center space-x-1 mr-4 border shadow-[0_0_20px_rgba(255,255,255,0.45)]
                   border-white/30 py-1.5 px-3 rounded-2xl bg-black/30"
                >
                  <span>Hero v01</span>
                  <ChevronDown size={16} className="text-white" />
                </a>
                <button 
                  onClick={toggleNav} 
                  onMouseOver={openNav}
                  ref={NavRef}
                  className="text-black text-lg font-bold p-2 rounded-full bg-white"
                >
                  <Menu size={20} />
                  <span className="sr-only">Toggle menu</span>
                </button>
              </div>
            </div>
          </div>
        )}
        
      </div>

      {/* Bottom Hamburger Menu for all screens when scrolled */}
      {isScrolled && (
        <div 
          className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${MenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <button 
            ref={buttonRef}
            onMouseOver={openMenu} //Add opennav here
            onClick={toggleMenu}
            className="text-black  text-xl font-extrabold p-2.5 rounded-full bg-white shadow-lg"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      )}

      {/* Menu Dropdown */}
      {MenuOpen && (
        <div 
          ref={menuRef}
          onMouseLeave={closeMenu}
          className={`py-3 px-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg z-50 min-w-[340px] max-w-[400px]
           fixed ${isScrolled ? 'bottom-8 left-1/2 -translate-x-1/2' : 'right-4 top-16'}`}
        >
          <div className="flex space-x-2 sm:space-x-4">
            <a href="#Partner" className="text-white font-bold font-medium">
            <RevealEffect text="Partners" />
            </a>
            <a href="#Features" className="text-white font-bold font-medium">
            <RevealEffect text="Features" />
            </a>
            <a href="#Testimonials" className="text-white font-bold font-medium">
            <RevealEffect text="Testimonials" />
            </a>
            <a href="#Faq" className="text-white font-bold font-medium">
            <RevealEffect text="FAQ" />
            </a>
            <a href="#" className="text-white font-bold font-medium flex items-center">
              <ArrowUp size={18} className="mr-2 " />
            </a>
          </div>
        </div>
      )}

        {/* Seperate component for showing different UI when on small screens and user hasnt scrolled */}

        {/* Nav Dropdown for Small Screens only*/}
        {NavOpen && (
        <div 
          ref={NavRef}
          onMouseLeave={closeNav}
          className={`py-3 px-5 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-lg z-50 w-36 
           fixed ${isScrolled ? 'bottom-8 left-1/2 -translate-x-1/2' : 'right-6 top-16'} text-sm  mt-6 `}
        >
          <div className="flex flex-col space-y-4 text-sm mt-3 mb-3 ">
            <a href="#Partner" className="text-white font-bold  ">
            <RevealEffect text="Partners" />
            </a>
            <a href="#Features" className="text-white font-bold font-medium">
            <RevealEffect text="Features" />
            </a>
            <a href="#Testimonials" className="text-white font-bold font-medium">
            <RevealEffect text="Testimonials" />
            </a>
            <a href="#Faq" className="text-white font-bold font-medium">
            <RevealEffect text="FAQ" />
            </a>
            <a href="#" className="text-white font-bold font-medium flex items-center">
              <ArrowUp size={18} className="mr-2 " />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar