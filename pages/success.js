import Head from 'next/head'
import Link from 'next/link'

export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-500 text-lg">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col py-44 w-full flex-1 px-20 items-center">
        <section className="bg-white p-8 rounded-lg shadow-2xl max-w-xl">
          <h1 className="text-2xl font-bold mb-8">Success</h1>
        </section>
        <Link href="/">home</Link>
      </main>
    </div>
  )
}
