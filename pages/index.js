import Head from 'next/head'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import Terminal from '../components/terminal'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 selection:bg-lime-300 selection:text-black">
        <div className="relative flex flex-col min-h-screen">
          <main className="flex-1">
            <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-lime-500"><span className="text-blue-300">Hi,</span><br /><span className="text-red-400"> I&apos;m</span> Matan</span>
                <span className="text-lime-300">Peretz<span className="text-lime-500">;</span></span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                You can learn more about me using the <a className="underline decoration-lime-500">terminal</a> below
                <br />
                or navigate using the <a className="underline decoration-lime-300">menu</a>, like my aunt Alice.
              </p>
            </div>
            <div className="mt-12 mx-auto max-w-screen-xl px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-28 lg:px-8 xl:mt-32">
              <Terminal />
            </div>
          </main>
          </div>
        </div>
    </div>
  )
}
