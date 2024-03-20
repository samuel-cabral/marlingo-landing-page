import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto mt-6 flex w-full max-w-7xl items-center">
      <Link href="/">
        <Image src="/images/Logo.svg" alt="Marlingo" width={100} height={100} />
      </Link>
    </header>
  )
}
