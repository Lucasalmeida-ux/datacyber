import { faBoxes, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function Products() {
    return (
        <div className="has-background-primary-light">
            <div id="Products" className="container has-text-centered py-6">
                <h1 className="title">Nossos Produtos </h1>
                <h2 className="subtitle">
                    Contamos com produtos para comercios varejistas e atacadistas
            </h2>
                <div className="columns">
                    <div className="column">
                        <Link href="/sistema/Atacadista"><a className="linkBok">
                            <FontAwesomeIcon icon={faBoxes} className="my-icon" />
                            <h2 className="title is-5">Sistema para Gestão de Distribuidoras</h2>
                            <p>Para quem deseja ter controle de vendas, Emissão de nfe, Emissão de cupom fiscal, entrada mercadorias,estoque, fluxo de caixa, vendedores, fornecedores,comissões, relatorios, contas a pagar.</p>
                            <button class="button is-link my-3">Benefícios para distribuidoras</button>
                        </a></Link>
                    </div>
                    <div className="column">
                        <Link href="/sistema/Varejista"><a className="linkBok">
                            <FontAwesomeIcon icon={faShoppingBasket} className="my-icon" />
                            <h2 className="title is-5">Comércios varegistas</h2>
                            <p>Para quem deseja ter controle de vendas,Emissão de nfe, Emissão de cupom fiscal, entrada mercadorias,estoque, fluxo de caixa, vendedores, fornecedores,comissões, relatorios, contas a pagar.</p>
                            <button class="button is-link my-3">Benefícios para varegistas</button>
                        </a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}