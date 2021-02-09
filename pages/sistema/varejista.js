import Head from 'next/head'
import Layout from '../components/layout'

export default function Varejista() {
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
        <div className="has-background-info">
        <div className="container">
          <div class="columns p-3">
            <div class="column  has-text-white">
              <h1 className="title pt-5 has-text-white">Comércios varegistas</h1>
              <p>Para quem deseja ter controle de vendas,Emissão de nfe, Emissão de cupom fiscal, entrada mercadorias,estoque, fluxo de caixa, vendedores, fornecedores,comissões, relatorios, contas a pagar.</p>
            </div>
            <div class="column">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/40UKP-1W810" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
            </div>
          </div>
        </div>
        </div>
      </Layout>
    </div>
  )
}
