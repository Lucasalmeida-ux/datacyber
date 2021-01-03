function Modal() {
    console.log('click');
    return (
        <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Formulário de assinatura do sistema</p>
                        <button className="delete" aria-label="close"></button>
                    </header>
                    <form>
                        <section className="modal-card-body">
                            <input type="text" name="name" placeholder="Nome" />
                            <input type="text" name="corporate" placeholder="Nome da empresa" />
                            <input type="phone" name="phone" placeholder="Telefone" />
                            <input type="email" name="email" placeholder="E-mail" />
                            <div>
                                <input type="password" name="pass" placeholder="Senha" />
                                <input type="password" name="confirmpass" placeholder="Confirmar Senha" />
                            </div>
                            <button className="modal-close is-large" aria-label="close">Finalizar</button>

                        </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Finalizar Pedido</button>
                    </footer>
                    </form>
                </div>
            </div>
    )
}

export default function Banner() {
    const pagSeguro = "https://pag.ae/7WxbMVsb2/button";
    return (
        <div className="has-background-light">
            <a onClick={Modal} target="_blank" title="Assine um plano personalizado" className="banner"><img src="banner.png" width="200" /></a>
            <Modal></Modal>
        </div>

    );
}
