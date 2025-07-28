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
    <section
      id="gallery"
      className="w-screen h-screen flex flex-col items-center justify-center relative overflow-hidden border-2 border-amber-700"
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Galerie</h2>
      <MasonryGallery images={images} />
    </section>
  )
}
