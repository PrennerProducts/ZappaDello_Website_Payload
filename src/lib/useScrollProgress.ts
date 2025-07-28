'use client'

import { useEffect, useState } from 'react'

export function useScrollProgress(totalSteps: number): number {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const totalScroll = document.body.scrollHeight - windowHeight
      const progress = scrollTop / totalScroll
      const newStep = Math.floor(progress * totalSteps)
      setStep(newStep)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [totalSteps])

  return step
}
