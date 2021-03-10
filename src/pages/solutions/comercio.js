import Layout from '../../components/layout/Layout'
import FeaturesComercio from '../../components/FeaturesComercio'
import Head from 'next/head'
import Compra from '../../components/compra'

export default function Comercio() {
    return (
        <>
            <Head>
                <title>Sistema para Comércios</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <div className="w-full grid md:grid-cols-4 p-3 text-white text-center md:text-left bg-mercado">
                    <div className="col-span-2 col-start-2 text-center p-3 md:p-7">
                        <h1 className="text-2xl text-gray-100 mt-3 md:mx-5 font-semibold">Sistema para comércios e varejos</h1>
                        <p className="text-gray-50">
                            Para quem deseja ter controle de vendas, Emissão de NF-e,
                            Emissão de cupom fiscal, entrada mercadorias, estoque,
                            fluxo de caixa, vendedores, fornecedores, comissões,
                            relatórios, contas à pagar, entre outros.
                        </p>
                    </div>
                    <div className="p-3 md:p-6">
                        {/* <iframe src="https://www.youtube.com/embed/40UKP-1W810" 
                        frameborder="0" 
                        height="250"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen=""
                        className="w-full " >
                        </iframe> */}
                    </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 text-center md:p-10">
                <h2 className="text-2xl text-gray-800 font-bold">Quanto vale seu estoque ?</h2>
                <h3 className="text-gray-700">Através dos relatórios você consegue saber qual é o custo total do seu estoque.</h3>
                </div>
                <Compra></Compra>
                <FeaturesComercio></FeaturesComercio>
                <div className="p-3 bg-gradient-to-br from-blue-100 via-blue-50 to-green-50 text-center md:p-10">
                <h2 className="text-2xl text-gray-800 font-bold">Conclusão</h2>
                <h3 className="text-gray-700">Nosso sistema possue ferramentas avançadas que fazem total diferença na sua gestão sem adesões extras</h3>
                </div>
            </Layout>
        </>
    )
}