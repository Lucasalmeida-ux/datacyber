import Layout from '../../components/layout/Layout'

export default function relatorios() {
    return(
        <Layout>
            <div className="bg-green-200 p-3">
                <h1 className="font-semibold text-2xl p-3 text-blue-500">Lista de Relatórios</h1>
            </div>
            <ul className="p-8">
                <li> 
                    <span className="font-semibold">Relatórios de vendas</span>
                    <ul className="pl-3">
                        <li>Relatório de vendas diárias</li>
                        <li>Relatório de cupons</li>
                        <li>Relatório de cupons do S@T</li>
                        <li>Relatório Por vendedor</li>                        
                        <li>Relatório de comissão de mercadoria por vendedor</li>
                        <li>Relatório de estoque valorizada</li>                        
                        <li>Relatório de taxa de entrega</li>
                        <li>Relatório de taxa de serviço</li>                        
                        <li>Relatório de mercadoria vendidas por grupo</li>
                        <li>Relatório de mercadoria vendidas por prateleira</li>
                        <li>Relatório de mercadorias por Ranking</li>
                        <li>Relatório de arquivo para contador</li>
                        <li>Relatório de devolução</li>
                    </ul>
                </li>
                <li>
                <span className="font-semibold">Relatório de pedidos</span>
                    <ul className="pl-3">
                        <li>Relatório de pedidos por vendedor</li>
                        <li>Relatório de mercadorias dos pedidos</li>
                        <li>Relatório de pedidos e mercadorias canceladas</li>
                        <li>Relatório de pedidos por status</li>
                        <li>Relatório de devolução de pedidos</li>
                    </ul>
                </li>
            </ul>
        </Layout>
    )
}