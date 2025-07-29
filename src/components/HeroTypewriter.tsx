'use client'
import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function HeroTypewriter() {
  const [easterShown, setEasterShown] = useState(false)

  const initialSequence = [
    3000,
    'The music, the people and you.',
    3000,
    'The original bar in Kaunertal.',
    3000,
    'Be there or be square.',
    5000,
    'Psst… mention "Saftladen1992" at the bar...',
    5000,
    '... and get a free shot of Zirben. Cheers! 🥃',
    1000,
    () => setEasterShown(true),
  ]

  const loopSequence = [
    3000,
    'The music, the people and you.',
    3000,
    'The original bar in Kaunertal.',
    3000,
    'Be there or be square.',
  ]

  return (
    <TypeAnimation
      key={easterShown ? 'loop' : 'initial'}
      sequence={easterShown ? loopSequence : initialSequence}
      wrapper="span"
      speed={50}
      repeat={easterShown ? Infinity : 0}
    />
  )
}
