import { faHeadset, faNetworkWired, faPenAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Services() {
    return (
        <div id="services" className="container has-text-centered py-6">
            <h1 className="title">Nossos Serviços </h1>
            <h2 className="subtitle">Com a contratação do Sistema estão inclusos todos os serviços abaixo sem custos adicionais.</h2>
            <div className="columns">

                <div className="column">
                    <FontAwesomeIcon icon={faNetworkWired} className="my-icon" />
                    <h2 className="title is-5">Implantação</h2>
                    <p>Nós fazemos á instalação remota e o treinamento é feito online ou presencial com aulas explicativas e se houver duvidas, poderão ser tiradas pelo telefone a qualquer hora.</p>
                </div>
                <div className="column">
                    <FontAwesomeIcon icon={faHeadset} className="my-icon" />
                    <h2 className="title is-5">Suporte</h2>
                    <p>O treinamento é feito online, com aulas explicativas e se houver dúvidas, poderão ser tiradas pelo telefone a qualquer hora.
</p>
                </div>
                <div className="column">
                    <FontAwesomeIcon icon={faPenAlt} className="my-icon" />
                    <h2 className="title is-5">Atualizações</h2>
                    <p>Devido ao alto nível de aderência do sistema, as atualizações são rápidas e seguras sem custo adicional.</p>
                </div>
            </div>
        </div>
    )
}