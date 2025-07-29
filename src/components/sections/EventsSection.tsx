'use client'

import { format } from 'date-fns'
import { de } from 'date-fns/locale'
import Image from 'next/image'
import { useState } from 'react'

type Event = {
  id: string
  title: string
  date: string
  location?: string
  image?: {
    url: string
    alt: string
  }
  description?: string
}

type Props = {
  events: Event[]
}

export default function EventsSection({ events }: Props) {
  const [attendees, setAttendees] = useState<{ [key: string]: number }>({})

  const handleAttend = (eventId: string) => {
    setAttendees((prev) => ({
      ...prev,
      [eventId]: (prev[eventId] || 0) + 1,
    }))
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          Events & Specials
        </h2>

        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-black/40 backdrop-blur-sm border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-400/60 transition-all duration-300 group"
              >
                {/* Event Image */}
                {event.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={event.image.url}
                      alt={event.image.alt || event.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}

                {/* Event Content */}
                <div className="p-6">
                  {/* Date Badge */}
                  <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-black text-sm font-bold px-3 py-1 rounded-full mb-4">
                    {format(new Date(event.date), 'EEEE, dd. MMMM yyyy', { locale: de })}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300">
                    {event.title}
                  </h3>

                  {/* Location */}
                  {event.location && (
                    <p className="text-amber-300 text-sm mb-4 flex items-center">
                      <span className="mr-2">📍</span>
                      {event.location}
                    </p>
                  )}

                  {/* Description */}
                  {event.description && (
                    <div className="text-gray-300 text-sm leading-relaxed">{event.description}</div>
                  )}

                  {/* Attendees Counter */}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-amber-300 text-sm">
                      <span className="font-bold">{attendees[event.id] || 0}</span> vibes
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleAttend(event.id)}
                      className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold rounded-lg transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/50 hover:scale-105 transform group"
                    >
                      <span className="group-hover:animate-bounce inline-block">🔥</span>
                      <span className="ml-2">Let's Go!</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">Keine Events verfügbar</h3>
            <p className="text-gray-400">Bald gibt es hier spannende Events zu entdecken!</p>
          </div>
        )}
      </div>
    </section>
  )
}
