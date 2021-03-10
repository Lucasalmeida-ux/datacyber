import Layout from '../../components/layout/Layout'
import FeaturesAtacado from '../../components/FeatureAtacado'
import Head from 'next/head'
import Compra from '../../components/compra'

export default function Distribuidor() {
    return (
        <>
            <Head>
                <title>Sistema para Distribuidoras</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <div className="w-full grid grid-cols-6 p-10 text-white text-center bg-atacado">
                    <div className="col-start-2 col-span-4 p-3 md:p-5">
                        <h1 className="text-2xl text-gray-100 mt-3 md:mt-5">Sistema para gestão de Distribuidoras e Indústrias</h1>
                        <p className="text-gray-50">
                        O sistema para indústrias e distribuidoras é um software capaz de atender de forma eficiente as demandas de gestão de uma empresa. Desde controlar  as compras, requisição de materiais, produção, estoque, expedição e etc. 
                    </p>
                    </div>
                </div>
                <div className="p-3 bg-gradient-to-br text-center md:p-10">
                <h2 className="text-2xl text-gray-800 font-bold">Soluções para Distribuidoras e Indústrias</h2>
                
                </div>
                <div className="grid grid-cols-2 p-4">
                    <div>
                        <ul>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Vendas e Faturamento</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Prestação de Serviços</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Gestão Financeira</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Compras e recebimentos</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Importação de produtos</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Produção em / para terceiros</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Cadastro de fornecedores</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Cadastro de produtos</li>

                        </ul>
                    </div>
                        <ul>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Cadastro de metodos de pagamentos</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Orçamentos</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Pedidos</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Status de pedidos</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Contas à receber</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Controle de entrega de transportadora</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Controle de produção</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Baixa automática de boletos emitidos pelo banco</li>
                            <li className="p-1 text-gray-700 hover:bg-gray-100 mx-5">Emissão de arquivo XML para envio automático para contador</li>
                        </ul>
                    <div>

                    </div>
                </div>
                <Compra></Compra>
                <div className="p-3 bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 text-center md:p-10">
                <h2 className="text-2xl text-gray-800 font-bold">Quem usa nosso sistema</h2>
                <h3 className="text-gray-700">Têm suporte e atualizações vitalicias</h3>
                </div>
            </Layout>
        </>
    )
}