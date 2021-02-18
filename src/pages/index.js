import Head from 'next/head'
import Layout from '../components/layout/Layout'
import Hero from '../components/Hero'
import Fetures from '../components/Fetures'


export default function Home() {
  return (
    <>
    <Head>
        <title>Sistemas</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
    <Layout>
      <Hero></Hero>
      <Fetures></Fetures>
    </Layout>
  </>
  )
}
