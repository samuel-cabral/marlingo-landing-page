import Image from 'next/image'

import { ComingSoon } from '@/components/coming-soon'
import { JoinEmailList } from '@/components/join-email-list'

export default function Home() {
  return (
    <main className="relative mb-12 mt-12 flex flex-col items-start justify-between lg:flex-row">
      <aside>
        <Image
          src="/images/sphere.svg"
          alt="3d glassy ribbed concrete sphere"
          width={368}
          height={240}
        />
      </aside>

      <section className="absolute left-1/2 top-20 w-full max-w-7xl -translate-x-1/2 -translate-y-1/4 lg:top-1/4">
        <div className="flex flex-col items-start px-6">
          <h1 className="text-playfair-display text-4xl font-medium sm:text-5xl md:text-6xl">
            <p>Where Tomorrow&apos;s</p>
            <p>Finance Becomes</p>
            <p>Accessible</p>
          </h1>

          <p className="mt-12 text-lg sm:mt-10 sm:text-2xl">
            Euro account and crypto wallet in one app.
          </p>

          <div className="mt-6 lg:hidden">
            <ComingSoon />
          </div>

          <div className="mt-10 hidden lg:block">
            <JoinEmailList />
          </div>
        </div>
      </section>

      <aside>
        <Image
          src="/images/ui-preview.svg"
          alt="Marlingo UI preview"
          width={960}
          height={672}
          className="-mt-32 ml-auto md:mt-0"
        />
      </aside>

      <div className="mx-auto mt-6 w-full px-8 md:hidden">
        <JoinEmailList />
      </div>
    </main>
  )
}
