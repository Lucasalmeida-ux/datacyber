import Head from 'next/head'
import Hero from './components/Hero'
import Layout from './components/layout'
import Services from './components/Services'
import Products from './components/Products'
import Banner from './components/Banner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      
      <Layout>
        <Hero></Hero>
        <Banner></Banner>
        <Services></Services>
        <Products></Products>
      </Layout>
    </div>
  )
}
