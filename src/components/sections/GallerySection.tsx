import MasonryGallery from '@/components/MasonryGallery'

type Props = {
  images: {
    id: string
    url: string
    caption?: string
  }[]
}

export default function GallerySection({ images }: Props) {
  return (
    <section id="gallery" className="px-6 py-20  text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Galerie</h2>
      <MasonryGallery images={images} />
    </section>
  )
}
