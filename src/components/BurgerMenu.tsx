'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

export default function BurgerMenu() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  const handleNavClick = (href: string) => {
    setOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-5 right-5 z-50 flex flex-col items-center justify-center w-10 h-10 gap-[6px] group"
        aria-label="Toggle Menu"
      >
        <motion.span
          className="w-8 h-[2px] bg-white origin-center"
          animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
        />
        <motion.span className="w-8 h-[2px] bg-white" animate={{ opacity: open ? 0 : 1 }} />
        <motion.span
          className="w-8 h-[2px] bg-white origin-center"
          animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
        />
      </button>

      {/* Menü Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm text-white overflow-hidden"
          >
            {/* Menü-Einträge */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 text-2xl">
              <button
                onClick={() => handleNavClick('#home')}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('#gallery')}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Galerie
              </button>
              <button
                onClick={() => handleNavClick('#about')}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Über uns
              </button>
              <button
                onClick={() => handleNavClick('#events')}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Events
              </button>
              <button
                onClick={() => handleNavClick('#kontakt')}
                className="hover:text-amber-300 transition-colors duration-300"
              >
                Kontakt
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
