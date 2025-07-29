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
  const isEventPast = (eventDate: string) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Setze Zeit auf Mitternacht für fairen Vergleich
    const eventDateObj = new Date(eventDate)
    eventDateObj.setHours(0, 0, 0, 0)
    return eventDateObj < today
  }

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
          Events & Specials
        </h2>

        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {events.map((event) => {
              const isPast = isEventPast(event.date)
              return (
                <div
                  key={event.id}
                  className="bg-black/40 backdrop-blur-sm border border-gray-600/40 rounded-xl overflow-hidden hover:border-gray-400/80 shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] md:shadow-md md:hover:shadow-[0_0_30px_4px_rgba(245,158,11,0.4)] transition-all duration-300 group"
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
                    <div
                      className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-4 ${
                        isPast
                          ? 'bg-gradient-to-r from-gray-500 to-gray-700 text-gray-300 shadow-[0_0_15px_2px_rgba(107,114,128,0.3)]'
                          : 'bg-gradient-to-r from-green-400 to-green-600 text-white shadow-[0_0_15px_2px_rgba(34,197,94,0.6)]'
                      }`}
                    >
                      {format(new Date(event.date), 'EEEE, dd. MMMM yyyy', { locale: de })}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-gray-200 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Location */}
                    {event.location && (
                      <p className="text-gray-200 text-sm mb-4 flex items-center">
                        <span className="mr-2">📍</span>
                        {event.location}
                      </p>
                    )}

                    {/* Description */}
                    {event.description && (
                      <div className="text-gray-200 text-sm leading-relaxed">
                        {event.description}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-100 mb-2">Keine Events verfügbar</h3>
            <p className="text-gray-400">Bald gibt es hier spannende Events zu entdecken!</p>
          </div>
        )}
      </div>
    </section>
  )
}
