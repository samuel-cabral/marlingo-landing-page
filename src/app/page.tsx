import Image from 'next/image'

import { ComingSoon } from '@/components/coming-soon'
import { JoinEmailList } from '@/components/join-email-list'

export default function Home() {
  return (
    <main className="relative mb-10 mt-12 flex flex-col items-start justify-between md:flex-row">
      <aside className="">
        <Image
          src="/images/sphere.svg"
          alt="3d glassy ribbed concrete sphere"
          width={368}
          height={240}
        />
      </aside>

      <section className="">
        <div className="absolute left-1/2 top-8 w-full max-w-7xl -translate-x-1/2 -translate-y-1/4 items-center justify-between px-6 md:top-1/4">
          <h1 className="text-playfair-display text-4xl font-medium sm:text-5xl md:text-6xl">
            <p>Where Tomorrow&apos;s</p>
            <p>Finance Becomes</p>
            <p>Accessible</p>
          </h1>

          <p className="mt-12 text-lg sm:mt-10 sm:text-2xl">
            Euro account and crypto wallet in one app.
          </p>

          <div className="mt-6 md:hidden">
            <ComingSoon />
          </div>

          <div className="mt-10 hidden md:block">
            <JoinEmailList />
          </div>
        </div>
      </section>

      <aside className="">
        <Image
          src="/images/ui-preview.svg"
          alt="Marlingo UI preview"
          width={960}
          height={672}
          className="-mt-32 ml-4 md:mt-0"
        />
      </aside>

      <div className="mx-auto mt-6 w-full px-8 md:hidden">
        <JoinEmailList />
      </div>
    </main>
  )
}
