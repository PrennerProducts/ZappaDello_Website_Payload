import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import { Main } from '@/components/ds'
import BurgerMenu from '@/components/BurgerMenu'
export const dynamic = 'force-dynamic'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BurgerMenu />
      <div className="relative flex-1 min-h-screen overflow-hidden border-4 border-amber-50">
        {children}
      </div>
    </>
  )
}
