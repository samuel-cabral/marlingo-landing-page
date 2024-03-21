import { UserRound } from 'lucide-react'

import { Button } from './ui/button'

export function CreateAccountButtonMobile() {
  return (
    <Button variant="ghost" size="icon" className="text-muted-foreground">
      <UserRound size={24} />
    </Button>
  )
}
