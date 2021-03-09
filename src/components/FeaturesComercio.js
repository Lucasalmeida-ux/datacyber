import useState from 'react'
import { FaCoins, FaEye ,FaTicketAlt, FaPlus, FaBox, FaUser, FaStickyNote, FaDog, FaDollarSign, FaFileInvoiceDollar, FaClipboard, FaListAlt } from 'react-icons/fa'
import { HiChatAlt, HiOutlineOfficeBuilding, HiOutlineShoppingBag, HiChartPie, HiDocumentReport, HiPrinter, HiOutlineReceiptTax, HiReceiptTax } from 'react-icons/hi'
import Elem from './ElemFeature'

export default function FeaturesComercio() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 p-3 md:p-10 text-center">
            <Elem 
            icons={<HiDocumentReport className="icone"></HiDocumentReport>} 
            title="Relatório de produtos por fornecedores" 
            desc="Sugetão de compras de mercadoria por fornecedor"
            ></Elem>
            <Elem 
            icons={<HiPrinter className="icone"></HiPrinter>} 
            title="Impressão de Etiquetas" 
            desc="Imprimir etiquetas com código de barras, descrição e preço"
            ></Elem>
            <Elem 
            icons={<HiChartPie className="icone"></HiChartPie>} 
            title="Curva ABC" 
            desc="Relatório gráfico que visualiza o estoque dividido em 3 partes"
            ></Elem>
            <Elem 
            icons={<HiOutlineShoppingBag className="icone"></HiOutlineShoppingBag>} 
            title="Montagens de Kits" 
            desc="Permite a criação de kits promocionais"
            ></Elem>

            <Elem 
            icons={<HiOutlineOfficeBuilding className="icone"></HiOutlineOfficeBuilding>} 
            title="Redes de lojas" 
            desc="É possivel cadastrar os produtos em um único banco de dados e conferir o estoque de outras filiais"
            ></Elem>
            <Elem 
            icons={<HiChatAlt className="icone"></HiChatAlt>} 
            title="Estoque Mínimo" 
            desc="O sistema notifica quando a mercadoria estiver acabando"
            ></Elem>




            <Elem 
            icons={<HiReceiptTax className="icone"></HiReceiptTax>} 
            title="Emissão de cupon fiscal" 
            desc="Emite cupon fiscal no ato da compra"
            ></Elem>
            <Elem 
            icons={<HiOutlineReceiptTax className="icone"></HiOutlineReceiptTax>} 
            title="Emissão de nota fiscal" 
            desc="Facilidade na emissão da nota fiscal"
            ></Elem>
            <Elem 
            icons={<FaBox className="icone"></FaBox>} 
            title="Controle de Estoque" 
            desc="Histórico de venda e compra, devoluções, promoções e kits"
            ></Elem>
            <Elem 
            icons={<FaUser className="icone"></FaUser>} 
            title="Gerenciamento de Conta Cliente"
            desc="Histórico de cupons pagos, compras, pedidos, parcelas e de devoluções"
            ></Elem>
            <Elem 
            icons={<FaStickyNote className="icone"></FaStickyNote>} 
            title="Entrada de nota XML" 
            desc="Sua vida simplificada usando XML do fornecedor. Toda movimentação de entrada é registrada automaticamente e o custo do produto é calculado precisamente"
            ></Elem>
            <Elem 
            icons={<FaDog className="icone"></FaDog>} 
            title="Agenda Pet" 
            desc="Cadastro de Agendamento para petshops"
            ></Elem>
            <Elem 
            icons={<FaDollarSign className="icone"></FaDollarSign>} 
            title="Contas a Receber" 
            desc="Visualizar pagamentos pendentes do seus clientes"
            ></Elem>
            <Elem 
            icons={<FaFileInvoiceDollar className="icone"></FaFileInvoiceDollar>} 
            title="gerenciar contas a pagar" 
            desc="Você consegue administrar boletos, despesas fixas e dispesas variáveis"
            ></Elem>
            <Elem 
            icons={<FaClipboard className="icone"></FaClipboard>} 
            title="Relatórios" 
            desc="Nosso sistema possue diversos relatórios gerenciais"
            link="/docs/relatorios"
            ></Elem>
            <Elem 
            icons={<FaListAlt className="icone"></FaListAlt>} 
            title="Orçamento" 
            desc="Emissão de Orçamentos"
            ></Elem>
            <Elem 
            icons={<FaPlus className="icone"></FaPlus>} 
            title="Pedidos" 
            desc="Emissão de Pedidos / Balcão"
            ></Elem>
            <Elem 
            icons={<FaTicketAlt className="icone"></FaTicketAlt>} 
            title="Pagamento parcial" 
            desc="Facilita o meio de pagamento parcial por comanda ou mesa"
            ></Elem>
            <Elem 
            icons={<FaEye className="icone"></FaEye>} 
            title="Consulta no Caixa" 
            desc="Visualize informações/históricos"
            ></Elem>
            <Elem 
            icons={<FaCoins className="icone"></FaCoins>} 
            title="Contas a Pagar" 
            desc="Relatório de gastos"
            ></Elem>

        </div>
            )
}