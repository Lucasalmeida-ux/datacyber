import Link from "next/link";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-two-thirds">
                            <h1 className="title mt-large">
                                Tecnologia em sistemas
                        </h1>
                            <h3 className="subtitle desktop-mt-5">
                                Otimize a sua empresa com o que existe de mais moderno e eficiente.<br />
                            Nossa empresa é líder no ramo de gestão empresarial.<br />
                            Descomplique sua rotina diária !
                        </h3>
                            <div class="buttons">
                                <Link href="/sistema/varejista"><button class="button is-rounded">Sistema para varejistas</button></Link>
                                <Link href="/sistema/atacadista"><button class="button is-link is-rounded">Sistema para atacadistas</button></Link>
                            </div>
                        </div>
                        <div className="column">
                            <img src="hero1.png" />
                        </div>
                    </div>
                </div>
            </div>

        </section>)
}