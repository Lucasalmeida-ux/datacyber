import Head from 'next/head'
import Layout from '../components/layout'

export default function Atacadista() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Card title</p>
            <a href="#collapsible-card" data-action="collapse" class="card-header-icon is-hidden-fullscreen" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div id="collapsible-card" class="is-collapsible is-active">
            <div class="card-content">
              <p class="title is-4">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one
                errors.”</p>
              <p class="subtitle is-5">
                Jeff Atwood</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
