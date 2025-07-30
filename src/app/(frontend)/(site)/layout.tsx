import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Main } from '@/components/ds'
import BurgerMenu from '@/components/BurgerMenu'
import HeroParticles from '@/components/HeroParticles'
export const dynamic = 'force-dynamic'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex-1 min-h-screen overflow-hidden">
        {/* <DiscoBackground /> */}
        <HeroParticles />
        <div className="relative">{children}</div>
      </div>
      {/* <Footer /> */}
    </>
  )
}
