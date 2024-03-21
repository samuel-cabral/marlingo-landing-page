import Link from 'next/link'

import { CreateAccountButton } from './create-account-button'
import { Button } from './ui/button'

export function AccountButtons() {
  return (
    <div
      id="account-buttons"
      className="hidden sm:flex sm:items-center sm:gap-3"
    >
      <Button
        asChild
        variant="ghost"
        className="hidden gap-2 text-purple-500 hover:text-purple-500 sm:block"
      >
        <Link href="/sign-in" className="text-primary">
          Sign in
        </Link>
      </Button>

      <CreateAccountButton />
    </div>
  )
}
