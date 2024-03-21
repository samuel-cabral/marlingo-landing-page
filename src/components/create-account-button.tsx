import { UserRound } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Button } from './ui/button'

export function CreateAccountButton() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="secondary"
            className="gap-2 rounded-lg border border-purple-100 bg-white text-purple-500"
          >
            <UserRound size={16} />
            <span>Create account</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent className="border-0 bg-foreground">
          <div className="absolute left-1/2 top-0 -z-10 h-4 w-4 -translate-x-2 rotate-45 bg-foreground" />
          <p className="text-background">Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
