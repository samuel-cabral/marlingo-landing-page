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
        <TooltipContent className="text-bg bg-foreground ">
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
