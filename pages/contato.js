import Head from 'next/head'
import FormContact from './components/FormContact'
import Layout from './components/layout'

export default function Contato() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
        <div className="container">
          <h1 className="title mt-4">Fale Conosco</h1>
          <h2 className="subtitle">Temos uma equipe esperando anciosamente para lhe atender.</h2>
          <div className="columns">
            <div className="column">
              <FormContact></FormContact>
            </div>
            <div className="column">
            <article class="panel is-primary">
                <p class="panel-heading">Fale Consoco</p>
                <div class="panel-block">
                            telefone: 11 2952-6221<br />
                            luana@datacyber.com.br<br />
                            whatts : 11 9 5218-5072 
                </div>
              </article>
              <article class="panel is-primary">
                <p class="panel-heading">Suporte</p>
                <div class="panel-block">
                            whatts : 11 9 4700-9576<br />
                            telefone : 11 2952-6221<br />
                            suporte@datacyber.com.br
                </div>
              </article>
              <article class="panel is-primary">
                <p class="panel-heading">Endereço</p>
                <div class="panel-block">
                Rua: Horto Florestal, 703 – Tremembé <br />
São Paulo – SP <br />
CEP: 02377-000 <br />
                </div>
              </article>
            </div>
          </div>
        </div>

      </Layout>
    </div >
  )
}
