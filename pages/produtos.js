import Head from 'next/head'
import Layout from './components/layout'
import Products from './components/Products'

export default function Produtos() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
        <Products></Products>
      </Layout>
    </div>
  )
}
