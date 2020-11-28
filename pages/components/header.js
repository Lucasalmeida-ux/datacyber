import Link from "next/link"

const menuItens = [
    {link: "/quem-somos", label: "Quem Somos", key: "quemsomos"},
    {link: "/produtos", label: "Produtos e Serviços", key: "produtoseservicos"},
    {link: "/contato", label: "Contato", key: "contato"},
]
const socialsItens = [
    {link: "facebook", label: "@jgvieira", key: "instagram"},
    {link: "instagram", label: "@jgvieira", key: "facebook"},
]

const Logo = () => (
    <div className="navbar-brand">
        <Link href="/"><a className="navbar-item"><img src="logo.png" /></a></Link>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
)

const Menu = () => (
    <div id="navbarBasicExample" className="navbar-end">
        <div className="navbar-start">  
        { menuItens.map(function(item) {
            return  <Link key={item.key} href={item.link}>
                        <a className="navbar-item has-text-primary">{item.label}</a>
                    </Link>
        }) }
        </div>
    </div>

)



export default function Header() {
    return (
        <nav className="navbar container" role="navigation" aria-label="main navigation">
            <Logo />
            <Menu />
        </nav>
    )
}