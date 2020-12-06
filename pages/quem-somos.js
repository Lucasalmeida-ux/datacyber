import Head from 'next/head'
import Hero from './components/Hero'
import Layout from './components/layout'

export default function QuemSomos() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
      <div class="container"><h2>Quem Somos</h2></div>
        
      </Layout>
    </div>
  )
}
