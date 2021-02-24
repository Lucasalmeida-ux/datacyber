import Layout from '../components/layout/Layout'
import Head from 'next/head'

export default function Contact() {
    return (
        <>
            <Head>
                <title>Fale Conosco</title>
                <link rel="icon" href="/favico.ico" />
            </Head>
            <Layout>
                <div className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 p-3">
                    <h1 className="md:text-2xl uppercase font-medium text-center text-white m-5">Formulário de Solicitação de orçamento</h1>
                    <div className="grid grid-cols-9 text-white">
                        <div className="col-span-3 col-start-4">
                            {/* <form>
                                <label htmlFor="name">Nome:</label>
                                <input type="text" id="name" placeholder="Nome Completo" className="outline-none" />

                                <label htmlFor="business">Nome da Empresa:</label>
                                <input type="business" id="business" placeholder="Nome da minha empresa" className="outline-none" />

                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" placeholder="meumelhoremail@email.com" className="outline-none" />

                                <label htmlFor="tel">Telefone:</label>
                                <input type="tel" id="tel" placeholder="99 99999-9999" className="outline-none" />

                                <label htmlFor="service">Serviço:</label>
                                <select id="service" name="service">
                                    <option value="distribuidoras">Sistema para Distribuidoras</option>
                                    <option value="comercio">Sistema para Comercio Varegista</option>

                                </select>

                                <label htmlFor="obs">Observações:</label>
                                <textarea id="obs" className="outline-none" />

                                <input type="submit" value="Solicitar Orçamento" className="cursor-pointer bg-gray-800 text-gray-200 border-none hover:bg-gray-700" />
                            </form> */}


                            <div id="mc_embed_signup">
                                <form action="https://datacyber.us7.list-manage.com/subscribe/post?u=b9f5572c1b7d5b4c1f579e125&amp;id=a8bae7bbfd" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                                    <div id="mc_embed_signup_scroll">
                                        <h2>Subscribe</h2>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-FNAME">Nome </label>
                                            <input type="text" value="" name="FNAME" className="required" id="mce-FNAME" />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-LNAME">Sobrenome </label>
                                            <input type="text" value="" name="LNAME" className="required" id="mce-LNAME" />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-NAMEEMP">Nome da Empresa </label>
                                            <input type="text" value="" name="NAMEEMP" className="required" id="mce-NAMEEMP" />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-EMAIL">Endereço de E-mail </label>
                                            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                                        </div>
                                        <div className="mc-field-group size1of2">
                                            <label htmlFor="mce-PHONE">Número de Telefone </label>
                                            <input type="text" name="PHONE" className="" value="" id="mce-PHONE" />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-MMERGE5">CPF/CNPJ </label>
                                            <input type="text" value="" name="MMERGE5" className="required" id="mce-MMERGE5" />
                                        </div>
                                        <div className="mc-field-group">
                                            <label htmlFor="mce-MMERGE7">Serviço </label>
                                            <select name="MMERGE7" className="" id="mce-MMERGE7">
                                                <option value=""></option>
                                                <option value="Sistema para distribuidora">Sistema para distribuidora</option>
                                                <option value="Sistema para comercio varegista">Sistema para comercio varegista</option>

                                            </select>
                                        </div>
                                        <div id="mce-responses" className="clear">
                                            <div className="response" id="mce-error-response" ></div>
                                            <div className="response" id="mce-success-response" ></div>
                                        </div>

                                        <div aria-hidden="true">
                                            <input type="text" name="b_b9f5572c1b7d5b4c1f579e125_a8bae7bbfd" tabindex="-1" value="" />
                                        </div>
                                        <div className="clear"> <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}