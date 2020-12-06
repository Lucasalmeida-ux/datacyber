export default function FormContact() {
    return (
        <div className="my-4">
            <div className="field">
                <label className="label">Nome: </label>
                <div className="control">
                    <input className="input" type="text" placeholder="Insira seu nome" />
                </div>
            </div>

            <div className="field">
                <label className="label">E-mail</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="Insira seu e-mail" value="nome@" />
                    <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p className="help is-danger">E-mail inválido</p>
            </div>

            <div className="field">
                <label className="label">Assunto</label>
                <div className="control">
                    <div className="select">
                        <select>
                            <option>Contratar Serviços</option>
                            <option>Suporte</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Mensagem</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Digite sua mensagem aqui"></textarea>
                </div>
            </div>


            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Enviar Mensagem</button>
                </div>
            </div>
        </div>
    );
}