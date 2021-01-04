import Head from 'next/head'
import Layout from '../components/layout'

function FormAssinatura() {
    const dadosForm = []
    const sistemas = [
        {value: "atacado", title: 'Sisitema de vendas em atacado'}, 
        {value: "varejo",  title: 'Sistema de vendas em varejo'}
    ]
    let options = [];
    for(let option in sistemas) {
        options.push(<option key={sistemas[option].value} value={sistemas[option].value}>{sistemas[option].title}</option>)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
            const val = [];
            for(let i = 0; i < e.target.length -1; i++) {
                val.push(<li key={e.target[i].value}>{e.target[i].value}</li>);
            }
            SetDados(val);
    }
    const SetDados = val => {
        if(typeof val !== 'object'){
            return(
                <h1>Dados</h1>
            )
        }
        return(
        <ul className="title">
             {/* {val} */}
        </ul>
        )
    }
    return (
        <div className="columns">
            <div className="column is-two-thirds">
                <header>
                    <h1 className="title">Assine o pacote de promoção 2021</h1>
                    <p className="subtitle">Preencha o formulário, entraremos em contato com você.</p>
                </header>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="input my-2" name="name" placeholder="Nome" required />
                    <input type="text" className="input my-2" name="corporate" placeholder="Nome da empresa" required />
                    <input type="phone" className="input my-2" name="phone" placeholder="Telefone" required />
                    <input type="email" className="input my-2" name="email" placeholder="E-mail" required />
                    <div className="my-4">
                        <input type="password" className="input" name="pass" placeholder="Senha" required />
                        <input type="password" className="input my-2" name="confirmpass" placeholder="Confirmar Senha" required />
                    </div>
                    <div class="select">
                        <select>
                            {options}
                        </select>
                    </div>
                    <div className="py-3">
                        <input className="button is-success" type="submit" value="Finalizar Pedido" />
                    </div>
                    
                </form>
            </div>
            <div className="column">
                <SetDados></SetDados>
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
