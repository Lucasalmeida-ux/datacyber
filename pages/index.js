import Head from 'next/head'
import Hero from './components/Hero'
import Layout from './components/layout'
import Services from './components/Services'
import Products from './components/Products'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <a href="https://pag.ae/7WxbMVsb2/button" target="_blank" title="Pagar com PagSeguro" className="banner"><img src="banner.png" width="200" /></a>
      <Layout>
        <Hero></Hero>
        <Services></Services>
        <Products></Products>
      </Layout>
    </div>
  )
}
