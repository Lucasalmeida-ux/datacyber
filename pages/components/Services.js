import { faHeadset, faNetworkWired, faPenAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Services() {
    return (
    <div id="services" className="container">
        <div className="columns">
        <div className="column">
                <FontAwesomeIcon icon={faNetworkWired} size="lg" className="icon" fixedWidth />
                <h2>Implantação</h2>
                <p>Nós fazemos á instalação remota e o treinamento é feito online ou presencial com aulas explicativas e se houver duvidas, poderão ser tiradas pelo telefone a qualquer hora.</p>
            </div>
            <div className="column">
                <FontAwesomeIcon icon={faHeadset} className="icon" />
                <h2>Suporte</h2>
                <p>Nós fazemos á instalação remota e o treinamento é feito online ou presencial com aulas explicativas e se houver duvidas, poderão ser tiradas pelo telefone a qualquer hora.</p>
            </div>
            <div className="column">
                <FontAwesomeIcon icon={faPenAlt} className="icon" />
                <h2>Atualizações</h2>
                <p>Nós fazemos á instalação remota e o treinamento é feito online ou presencial com aulas explicativas e se houver duvidas, poderão ser tiradas pelo telefone a qualquer hora.</p>
            </div>
        </div>
    </div>
    )
}