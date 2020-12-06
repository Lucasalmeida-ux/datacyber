import Header from "./header";
import Link from "next/link"

export default function Layout({ children }) {
    return <>
        <Header></Header>
        <div>{children}</div>
        <footer className="footer has-background-grey-darker has-text-light">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <Link href="/"><a className="navbar-item"><img src="/logo-w.png" width="200" /></a></Link>
                        <p>Otimize a sua empresa com o que existe de mais moderno e eficiente.
                        Nossa empresa é líder no ramo de gestão empresarial. Descomplique sua rotina de trabalho!</p>
                    </div>
                    <div className="column">
                        <h2>Fale Consoco</h2>
                        <a href="http://web.whatsapp.com/send?1=pt_BR&amp;phone=5511952185072" className="has-text-primary">whatts : 11 9 5218-5072</a><br />
                            telefone: 11 2952-6221<br />
                            luana@datacyber.com.br
                    </div>
                    <div className="column">
                        <h2>Suporte</h2>
                        <a href="http://web.whatsapp.com/send?1=pt_BR&amp;phone=5511947009576" className="has-text-primary">whatts : 11 9 4700-9576</a><br />
                            telefone : 11 2952-6221
                            suporte@datacyber.com.br
                    </div>
                    <div className="column">
                    <h2>Endereço</h2>
Rua: Horto Florestal, 703 – Tremembé
São Paulo – SP
CEP: 02377-000
                    </div>
                </div>
            </div>
        </footer>
    </>
}