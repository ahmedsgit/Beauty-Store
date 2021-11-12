import Head from 'next/head'
import Form from '../components/Form';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Slider from '../components/Slider';

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
        <Slider/>
        <Layout/>
        <Form/>
      </main>

    </div>
  )
}
