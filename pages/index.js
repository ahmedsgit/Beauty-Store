import Head from 'next/head'
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="font-gotham">
      <Head>
        <title>Beauty Store</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="./../build/output.css"/>
      </Head>
      <main>
        <Navigation/>
      </main>

    </div>
  )
}
