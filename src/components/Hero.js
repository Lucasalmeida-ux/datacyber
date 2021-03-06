import Link from 'next/link'

export default function Hero() {
    return (
        <div className="carousel shadow-lg bg-white">
            <div className="carousel-inner relative overflow-hidden w-full">
                {/* <!--Slide 1--> */}
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" defaultChecked />
                <div className="carousel-item absolute opacity-0 h-80 bg-indigo-500">
                    <div className="bg-opacity-10 bg-mercado bg-cover bg-center block h-full w-full p-3">
                        <h1 className="p-3 md:mt-5 text-sm font-medium md:text-4xl md:mx-20 text-white">Software para Comércios e Distribuidoras</h1>
                        <p className="p-3 text-sm md:text-xl mb-5 md:mx-20 text-white md:max-w-2xl" >Para quem deseja ter controle de vendas,Emissão de nfe, Emissão de cupom fiscal, entrada mercadorias,estoque, fluxo de caixa, vendedores, fornecedores,comissões, relatorios, contas a pagar.</p>
                        <Link href="/solutions/comercio">
                            <a className="text-center mb-2 md:inline-block block transition-colors rounded-md shadow-md mx-3 md:ml-24 px-4 py-3 bg-blue-200 hover:bg-white text-gray-800">Software para Comércios</a>
                        </Link>
                        <Link href="/solutions/distribuidor">
                            <a className="text-center mb-2 md:inline-block block transition-colors rounded-md shadow-md mx-3 px-4 py-3 bg-blue-200 hover:bg-white text-gray-800">Software para Distribuidoras e Indústrias</a>
                        </Link>
                    </div>
                </div>
                {/* <label htmlFor="carousel-2" className="transition-colors invisible md:visible prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-2" className="transition-colors invisible md:visible next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> */}
                {/* <!--Slide 2--> */}
                {/* <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" defaultChecked />
                <div className="carousel-item absolute opacity-0 h-80" >
                    <div className="bg-opacity-10 bg-atacado bg-cover bg-center block h-full w-full p-3">
                        <h1 className="p-3 md:mt-5 text-sm font-medium md:text-4xl md:mx-20 text-white">Software para Distribuidoras e Indústrias</h1>
                        <p className="p-3 text-sm md:text-xl mb-5 md:mx-20 text-white md:max-w-2xl" >Para quem deseja ter controle de vendas, Emissão de nfe, Emissão de cupom fiscal, entrada mercadorias,estoque, fluxo de caixa, vendedores, fornecedores,comissões, relatorios, contas a pagar.</p>
                    </div>
                </div>
                <label htmlFor="carousel-1" className="transition-colors invisible md:visible prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-400 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
                <label htmlFor="carousel-1" className="transition-colors invisible md:visible next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-400 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label> */}

                {/* <!-- Add additional indicators for each slide--> */}
                {/* <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-1" className="transition-colors carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-500">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label htmlFor="carousel-2" className="transition-colors carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-500">•</label>
                    </li>
                </ol> */}

            </div>
        </div>

    )
}