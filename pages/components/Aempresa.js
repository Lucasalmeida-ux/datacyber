import { faAddressCard, faPaintBrush, faUsersCog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Aempresa() {
    return (
        <div id="services" className="container has-text-centered py-6">
            <h1 className="title">A Empresa</h1>
            <div className="columns">

                <div className="column">
                    <FontAwesomeIcon icon={faAddressCard} className="my-icon" />
                    <h2 className="title is-5">Quem Somos</h2>
                    <p>Somos uma empresa de Tecnologia, desenvolvemos software para prestar serviços inovadores que contribuem para a melhoria da qualidade na administração da sua empresa.</p>
                </div>
                <div className="column">
                    <FontAwesomeIcon icon={faUsersCog} className="my-icon" />
                    <h2 className="title is-5">Equipe</h2>
                    <p>Contamos com uma equipe altamente capacitada e pronta para oferecer o atendimento rapido para ajuda-lo ao telefone, online e conexão remota</p>
                </div>
                <div className="column">
                    <FontAwesomeIcon icon={faPaintBrush} className="my-icon" />
                    <h2 className="title is-5">Personalização</h2>
                    <p>Sabemos que cada empresa é única. Por isso, completamos sem adesão o sistema de acordo com a necessidade de cada cliente</p>
                </div>
            </div>
        </div>
    )
}