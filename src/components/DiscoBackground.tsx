'use client'

export default function DiscoBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none -z-50">
      <div className="absolute top-20 left-10 w-96 h-96 bg-stone-600/50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-stone-700/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-stone-600/50 rounded-full blur-3xl animate-pulse delay-500"></div>
      <div className="absolute top-60 left-1/4 w-64 h-64 bg-gray-800/30 rounded-full blur-3xl animate-pulse delay-1500"></div>
      <div className="absolute bottom-40 right-1/3 w-88 h-88 bg-gray-700/40 rounded-full blur-3xl animate-pulse delay-750"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-stone-600/50 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-yellow-500/15 rounded-full blur-3xl animate-pulse delay-1250"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-orange-500/15 rounded-full blur-3xl animate-pulse delay-1750"></div>
    </div>
  )
}
