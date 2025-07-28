import Image from 'next/image'
import React from 'react'

type Event = {
  id: string
  title: string
  date: string
  location: string
  image?: { url: string }
  description?: any
}

async function getEvents(): Promise<Event[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'}/api/events?limit=100`,
    {
      cache: 'no-store',
    },
  )
  const data = await res.json()
  return data.docs
}

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
            {event.image?.url && (
              <Image
                src={event.image.url}
                alt={event.title}
                width={600} // oder eine andere sinnvolle Breite
                height={300} // oder eine andere sinnvolle Höhe
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-500 mb-1">{new Date(event.date).toLocaleDateString()}</p>
            <p className="text-gray-700 mb-2">{event.location}</p>
            {/* Optional: Beschreibung als Rich Text rendern */}
            {/* <div dangerouslySetInnerHTML={{ __html: event.description }} /> */}
          </div>
        ))}
      </div>
    </main>
  )
}
