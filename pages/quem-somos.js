import Head from 'next/head'
import Hero from './components/Hero'
import Layout from './components/layout'
import Services from './components/Services'

export default function QuemSomos() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
        <Services></Services>
      </Layout>
    </div>
  )
}
