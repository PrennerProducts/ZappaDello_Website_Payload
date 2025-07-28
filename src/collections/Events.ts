import type { CollectionConfig } from 'payload'

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'location'],
  },
  access: {
    read: () => true, // öffentlich lesbar
  },
  fields: [
    {
      name: 'title',
      label: 'Event-Titel',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      label: 'Datum & Uhrzeit',
      type: 'date',
      required: true,
    },
    {
      name: 'location',
      label: 'Ort',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Bild',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      label: 'Beschreibung',
      type: 'richText',
    },
  ],
}

export default Events
