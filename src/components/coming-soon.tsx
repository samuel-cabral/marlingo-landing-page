import Image from 'next/image'

import { Button } from './ui/button'

export function ComingSoon() {
  return (
    <Button
      variant="secondary"
      className="cursor-default rounded-full border bg-white"
    >
      <Image
        src="/images/euro.svg"
        alt="european union flag rounded"
        width={20}
        height={20}
      />
      <span className="ml-2 font-light tracking-tight">
        Coming soon in EEA countries.
      </span>
    </Button>
  )
}
