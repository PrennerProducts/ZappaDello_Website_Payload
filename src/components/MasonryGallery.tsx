'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Masonry from 'react-masonry-css'

import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'

import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'

type Props = {
  images: {
    id: string
    url: string
    caption?: string
  }[]
}

export default function MasonryGallery({ images }: Props) {
  const [index, setIndex] = useState<number | null>(null)

  return (
    <>
      <Masonry
        breakpointCols={{ default: 3, 1024: 2, 640: 1 }}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {images.map(({ id, url, caption }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative cursor-pointer overflow-hidden rounded-2xl border border-cyan-500/10 hover:border-cyan-400/50 shadow-md hover:shadow-[0_0_30px_4px_rgba(0,255,255,0.2)] transition-all duration-300 backdrop-blur-sm bg-black/20"
            onClick={() => setIndex(i)}
          >
            <Image
              src={url}
              alt={caption || 'Galeriebild'}
              width={800}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
            {caption && (
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 backdrop-blur-sm">
                <p className="text-sm text-cyan-100">{caption}</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-center justify-center text-white font-medium text-lg">
              Jetzt ansehen
            </div>
          </motion.div>
        ))}
      </Masonry>

      <Lightbox
        open={index !== null}
        close={() => setIndex(null)}
        index={index ?? 0}
        slides={images.map(({ url, caption }) => ({
          src: url,
          title: caption,
        }))}
        plugins={[Zoom, Thumbnails]}
        zoom={{
          scrollToZoom: true,
        }}
        render={{
          iconZoomIn: () => null,
          iconZoomOut: () => null,
          slide: ({ slide }) => (
            <div className="flex items-center justify-center w-full h-full px-6">
              <div className="p-[2px] rounded-2xl border border-cyan-400 shadow-[0_0_30px_5px_rgba(0,255,255,0.3)] overflow-hidden">
                <div className="relative max-w-[90vw] max-h-[calc(100vh-160px)] flex items-center justify-center">
                  <Image
                    src={slide.src}
                    alt="Galeriebild"
                    width={1600}
                    height={1200}
                    className="rounded-2xl object-contain max-w-full max-h-full"
                  />
                </div>
              </div>
            </div>
          ),
        }}
        styles={{
          container: {
            backgroundColor: 'rgba(0,0,0,0.95)',
            backdropFilter: 'blur(6px)',
          },
          navigationPrev: { color: '#00ffff', fontSize: '2rem' },
          navigationNext: { color: '#00ffff', fontSize: '2rem' },
          button: { color: '#00ffff' },
        }}
      />
    </>
  )
}
