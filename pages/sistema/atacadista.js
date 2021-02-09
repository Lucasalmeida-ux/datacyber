import Head from 'next/head'
import CardCollapseble from '../components/card'
import Layout from '../components/layout'
import Carousel from '../components/Slider'
let cardsOne = [
  { title: "Cadastro de produtos", label: "Em todas as vendas e orçamentos é possível registrar um cliente, um vendedor, a lista dos produtos orçados e outras informações. Após a aprovação, os orçamentos podem ser transformados em vendas. A tela de orçamento foi feita para ser ágil, possibilitando o cadastro de clientes e envio por e-mail através de alguns cliques. Ao finalizar as vendas, o Sistema automaticamente registra as contas a receber, comissão de vendedores e efetua uma baixa em estoque" },
  { title: "Cadastro de clientes", label: "Em todas as vendas e orçamentos é possível registrar um cliente, um vendedor, a lista dos produtos orçados e outras informações. Após a aprovação, os orçamentos podem ser transformados em vendas. A tela de orçamento foi feita para ser ágil, possibilitando o cadastro de clientes e envio por e-mail através de alguns cliques. Ao finalizar as vendas, o Sistema automaticamente registra as contas a receber, comissão de vendedores e efetua uma baixa em estoque" },
  { title: "Entrada de nota xml", label: "" },
  { title: "Controle de estoque", label: "" },
  { title: "Agenda para cadastro de pets", label: "" },
  { title: "Contas a Receber", label: "" },
];
let cardsTwo = [
  { title: "Sugestão de Compra", label: "" },
  { title: "Relatorios Gerenciais", label: "" },
  { title: "Orçamentos", label: "" },
  { title: "Regenciamento de pedido", label: "" },
  { title: "Pedido balcão", label: "" },
  { title: "Conta cliente / fiado", label: "" },
  { title: "Pagamento parcial de mesas ou comandas", label: "" },
  { title: "Consulta do caixa", label: "" },
  { title: "Contas a pagar", label: "" },
];

export default function Atacadista() {


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
              <h1 className="title pt-5 has-text-white">Sistema para Gestão de Distribuidoras</h1>
              <p>
              Para quem deseja ter controle de vendas, Emissão de nfe, Emissão de cupom fiscal, entrada mercadorias,estoque, fluxo de caixa, vendedores, fornecedores,comissões, relatorios, contas a pagar.
              </p>
            </div>
            <div class="column">
              <Carousel></Carousel>
            </div>
          </div>
        </div>
        </div>
        <div className="container p-5">
          <h1 className="title">Módulos</h1>
          <div style={{ width: 50 + '%', float: 'left' }}>
            {
              cardsOne.map(function (card) {
                return (
                  <CardCollapseble key={card.title} title={card.title} className="level-item">
                    {card.label}
                  </CardCollapseble>
                )
              })
            }
          </div>
          <div style={{ width: 50 + '%', float: 'left' }}>
            {
              cardsTwo.map(function (card) {
                return <CardCollapseble title={card.title} className="level-item">
                  {card.label}
                </CardCollapseble>
              })
            }
          </div>
          <div className="clear"></div>
        </div>
        <div className="block has-background-info">
          <div className="container p-4">
            <h1 className="title has-text-white-ter">Quem usa nosso sistema ?</h1>
            <h2 className="subtitle has-text-white">A Datacyber possue módulos personalizados para cada nincho de mercado.</h2>
            <ul className="has-text-white">
              <li>Comércios
              <ul>
                  <li>Lojas de Roupas</li>
                  <li>Lojas Cosméticos</li>
                  <li>Lojas de Materiais de Construção</li>
                  <li>Lojas de Autopeças</li>
                  <li>Lojas de Ração/Pet shops</li>
                  <li>Lojas de Produtos de Informática</li>
                  <li>Lojas de Ferramentas e ferragens</li>
                  <li>Lojas de Materiais de construção</li>
                  <li>Mercados</li>
                  <li>Lojas de produtos de limpeza </li>
                  <li>Lojas de Papeis de Parede</li>
                  <li>Lojas de Embalagens</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  )
}
