import Image from 'next/image'
import Link from 'next/link'

import { AccountButtons } from './account-buttons'
import { AccountButtonsMobile } from './account-buttons-mobile'
import { ComingSoon } from './coming-soon'

export function Header() {
  return (
    <header className="mt-10 flex w-full items-center md:mt-6">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="Marlingo"
              width={100}
              height={100}
            />
          </Link>

          <div className="hidden lg:block">
            <ComingSoon />
          </div>
        </div>

        <AccountButtons />

        <div className="sm:hidden">
          <AccountButtonsMobile />
        </div>
      </nav>
    </header>
  )
}
