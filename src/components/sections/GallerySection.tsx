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
    <section className="py-20 px-6 relative z-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
          Galerie
        </h2>

        {images.length > 0 ? (
          <MasonryGallery images={images} />
        ) : (
          <div className="text-center text-gray-400">
            <p>Keine Bilder verfügbar</p>
          </div>
        )}
      </div>
    </section>
  )
}
