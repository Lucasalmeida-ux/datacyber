import Head from 'next/head'
import Layout from '../components/layout'

function FormAssinatura() {

    
    const sistemas = ['Sisitema de vendas em atacado', 'Sistema de vendas em varejo']
    const sistemaEscolhido = new String();
    const handleSubmit = () => {
        alert('submit')
    }
    
    return (
        <div className="columns">
            <div className="column is-two-thirds">
                <header>
                    <h1 className="title">Assine o pacote de promoção 2021</h1>
                    <p className="subtitle">Preencha o formulário, entraremos em contato com você.</p>
                </header>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input my-2" name="name" placeholder="Nome" />
                    <input type="text" className="input my-2" name="corporate" placeholder="Nome da empresa" />
                    <input type="phone" className="input my-2" name="phone" placeholder="Telefone" />
                    <input type="email" className="input my-2" name="email" placeholder="E-mail" />
                    <div className="my-4">
                        <input type="password" className="input" name="pass" placeholder="Senha" />
                        <input type="password my-2" className="input" name="confirmpass" placeholder="Confirmar Senha" />
                    </div>
                    <div class="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>With options</option>
                        </select>
                    </div>
                    <div className="py-3">
                        <input className="button is-success" type="submit" value="Finalizar Pedido" />
                    </div>
                    
                </form>
            </div>
            <div className="column">
                <h1 className="subtitle">
                    Sistema: {sistemaEscolhido}
                </h1>
            </div>
        </div>
    )
}

export default function Varejista() {
    return (
        <div>
            <Head>
                <title>Datacyber</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <div className="container py-5">
                    <FormAssinatura></FormAssinatura>
                </div>
            </Layout>
        </div>
    )
}
