import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Main } from '@/components/ds'
import BurgerMenu from '@/components/BurgerMenu'
import DiscoBackground from '@/components/DiscoBackground'
import HeroParticles from '@/components/HeroParticles'
export const dynamic = 'force-dynamic'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BurgerMenu />
      <div className="relative flex-1 min-h-screen overflow-hidden">
        <DiscoBackground />
        <HeroParticles />
        <div className="relative">{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  )
}
