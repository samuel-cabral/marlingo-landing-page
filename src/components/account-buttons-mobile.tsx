'use client'

import { UserRound } from 'lucide-react'
import Link from 'next/link'

import { Button } from './ui/button'

export function AccountButtonsMobile() {
  return (
    <Button variant="ghost" size="icon" className="text-muted-foreground">
      <Link href="/sign-up">
        <UserRound size={24} />
      </Link>
    </Button>
  )
}
