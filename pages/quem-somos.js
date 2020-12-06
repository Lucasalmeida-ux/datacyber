import Head from 'next/head'
import Aempresa from './components/Aempresa'
import Banner from './components/Banner'
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
        <Aempresa></Aempresa>
        <Banner></Banner>
        <Services></Services>
      </Layout>
    </div>
  )
}
