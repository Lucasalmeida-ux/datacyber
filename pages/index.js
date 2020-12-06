import Head from 'next/head'
import Hero from './components/Hero'
import Layout from './components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
        <Hero></Hero>
      </Layout>
    </div>
  )
}
