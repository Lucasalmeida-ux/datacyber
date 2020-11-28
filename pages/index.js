import Head from 'next/head'
import Header from './components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </div>
  )
}
