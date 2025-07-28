import { LogoutButton } from '@/components/auth/logout-button'
import { Button } from '../ui/button'
import { Nav } from '@/components/ds'

import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.svg'

import { getUser } from '@/lib/auth'

import type { User } from '@/payload-types'
import BurgerMenu from '../BurgerMenu'

export const Header = async () => {
  const user: User | null = await getUser()

  return (
    <Nav
      className=" sticky top-0 bg-accent/30 backdrop-blur-md"
      containerClassName="flex justify-between items-center gap-4"
    >
      <Link href="/" className="flex gap-3 items-center">
        <Image
          src="/logo.svg"
          width={32}
          height={32} // für statische SVGs Pflicht, sonst Build-Warnung
          alt="Payload SaaS Starter"
          className="invert dark:invert-0"
        />

        <h3 className="sm:text-lg"></h3>
      </Link>

      {/* <div className="flex gap-2">
        {user ? (
          <>
            <LogoutButton />
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </>
        ) : (
          <>
            <Button asChild variant="ghost">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </>
        )}
      </div> */}
    </Nav>
  )
}
