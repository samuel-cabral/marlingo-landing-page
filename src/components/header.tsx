import Image from 'next/image'
import Link from 'next/link'

import { ComingSoon } from './coming-soon'
import { CreateAccountButton } from './create-account-button'
import { CreateAccountButtonMobile } from './create-account-button-mobile'
import { Button } from './ui/button'

export function Header() {
  return (
    <header className="mt-16 flex w-full items-center px-6 md:mt-6">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/images/Logo.svg"
              alt="Marlingo"
              width={100}
              height={100}
            />
          </Link>

          <div className="hidden md:block">
            <ComingSoon />
          </div>
        </div>

        <div
          id="account-buttons"
          className="hidden sm:flex sm:items-center sm:gap-3"
        >
          <Button
            asChild
            variant="ghost"
            className="hidden gap-2 bg-white text-purple-500 sm:block"
          >
            <Link href="/sign-in" className="text-primary">
              Sign in
            </Link>
          </Button>

          <CreateAccountButton />
        </div>

        <div className="sm:hidden">
          <CreateAccountButtonMobile />
        </div>
      </nav>
    </header>
  )
}
