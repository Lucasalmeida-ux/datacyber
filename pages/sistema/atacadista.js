import Head from 'next/head'
import CardCollapseble from '../components/card'
import Layout from '../components/layout'
let cardsOne = [
  {title: "Cadastro de produtos", label: "Em todas as vendas e orçamentos é possível registrar um cliente, um vendedor, a lista dos produtos orçados e outras informações. Após a aprovação, os orçamentos podem ser transformados em vendas. A tela de orçamento foi feita para ser ágil, possibilitando o cadastro de clientes e envio por e-mail através de alguns cliques. Ao finalizar as vendas, o Sistema automaticamente registra as contas a receber, comissão de vendedores e efetua uma baixa em estoque"},
  {title: "Cadastro de clientes", label: "Em todas as vendas e orçamentos é possível registrar um cliente, um vendedor, a lista dos produtos orçados e outras informações. Após a aprovação, os orçamentos podem ser transformados em vendas. A tela de orçamento foi feita para ser ágil, possibilitando o cadastro de clientes e envio por e-mail através de alguns cliques. Ao finalizar as vendas, o Sistema automaticamente registra as contas a receber, comissão de vendedores e efetua uma baixa em estoque"},
  {title: "Orçamentos e Vendas", label: "Em todas as vendas e orçamentos é possível registrar um cliente, um vendedor, a lista dos produtos orçados e outras informações. Após a aprovação, os orçamentos podem ser transformados em vendas. A tela de orçamento foi feita para ser ágil, possibilitando o cadastro de clientes e envio por e-mail através de alguns cliques. Ao finalizar as vendas, o Sistema automaticamente registra as contas a receber, comissão de vendedores e efetua uma baixa em estoque"},
];
let cardsTwo = [
  {title: "Emissão de NF-e", label: "O Nosso sistema é preparado para gerar boletos e você automaticamente pode dar baixa pelo arquivo retorno CNAB para envio de boletos para todos os bancos como Itaú, Santander, Bradesco, Banco do Brasil e Caixa. Com base nas vendas registradas você tem total controle entre contas á receber e parcelamentos de cartões de creditos junto com o juros."},
  {title: "Contas a Receber / Boletos", label: "O Nosso sistema é preparado para gerar boletos e você automaticamente pode dar baixa pelo arquivo retorno CNAB para envio de boletos para todos os bancos como Itaú, Santander, Bradesco, Banco do Brasil e Caixa. Com base nas vendas registradas você tem total controle entre contas á receber e parcelamentos de cartões de creditos junto com o juros."}
];

export default function Atacadista() {
  
  
  return (
    <div>
      <Head>
        <title>Datacyber</title>
        <link rel="icon" href="/favico.ico" />
      </Head>
      <Layout>
        <div className="container">
        <div style={{width: 50 + '%', float: 'left'}}>
          {
          cardsOne.map(function(card) {
            return <CardCollapseble title={card.title} className="level-item">
            {card.label}
          </CardCollapseble>
          })
          }
          </div>
          <div style={{width: 50 + '%', float: 'left'}}>
          {
          cardsTwo.map(function(card) {
            return <CardCollapseble title={card.title} className="level-item">
            {card.label}
          </CardCollapseble>
          })
          }
          </div>
          <div className="clear"></div>
        </div>
      </Layout>
    </div>
  )
}
