import { getPayload } from 'payload'
import config from '@/payload.config'
import MasonryGallery from '@/components/MasonryGallery'

export const dynamic = 'force-dynamic'

export default async function GalleryPage() {
  const payload = await getPayload({ config })
  const galleryItems = await payload.find({
    collection: 'gallery',
    sort: '-createdAt',
    limit: 100,
  })

  const images = galleryItems.docs.map((item) => ({
    id: item.id.toString(),
    url:
      item.image && typeof item.image === 'object' && 'url' in item.image
        ? item.image.url || ''
        : '',
    caption: item.caption ?? undefined,
  }))

  return (
    <main className="min-h-screen px-6 py-12 bg-black text-white">
      <h1 className="text-4xl font-bold mb-8 text-center">Galerie</h1>
      <MasonryGallery images={images} />
    </main>
  )
}
