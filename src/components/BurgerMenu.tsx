'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import MenuBackgroundCanvas from './MenuBackgroundCanvas'
import DiscoBallCanvas from './DiscoBallCanvas'

export default function BurgerMenu() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

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
            className="fixed inset-0 z-40 bg-black text-white overflow-hidden"
          >
            {/* 🎉 Hintergrund: DiscoBall */}
            <div className="absolute inset-0 z-0">
              <DiscoBallCanvas />
            </div>

            {/* Menü-Einträge */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8 text-2xl">
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
              <a href="/gallery" onClick={toggleMenu}>
                Gallerie
              </a>
              <a href="#menu" onClick={toggleMenu}>
                Speisekarte
              </a>
              <a href="#events" onClick={toggleMenu}>
                Events
              </a>
              <a href="#kontakt" onClick={toggleMenu}>
                Kontakt
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
